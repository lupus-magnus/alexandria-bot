import os
import random
from telegram.update import Update
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import CallbackContext
from utils.phrases import citations
from services.scraper import (
    get_book,
    get_book_download_source,
    search_books,
)


def start(update: Update, context: CallbackContext) -> None:
    """First function that runs when new people find the bot."""
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="E aí, qual livro você quer ler hoje?",
    )


def echo(update: Update, context) -> None:
    """Function that responds to whatever non-command message with a random quote about reading and literature."""
    context.bot.send_message(
        chat_id=update.effective_chat.id, text=random.choice(citations)
    )


def book(update: Update, context: CallbackContext) -> None:
    """Receives the user search query for a book, and presents him the options"""

    book_asked = (" ".join(context.args)) if len(context.args) > 1 else context.args[0]
    print("A book was asked:", book_asked)
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Opa, anotei aqui. Deixa eu verificar nas minhas prateleiras rapidinho...",
    )

    book_options = search_books(book_asked)

    # Storing book options in user data.
    context.user_data["books"] = book_options

    for book in book_options:
        index = book_options.index(book)
        message = f'{index + 1}) {book["title"]}\n\nAutor(a):\n{book["author"]}\n\nSize:\n{book["size"]}'
        update.message.reply_photo(book["image"], caption=message)

    custom_keyboard = [
        [
            InlineKeyboardButton("1", callback_data="1"),
            InlineKeyboardButton("2", callback_data="2"),
            InlineKeyboardButton("3", callback_data="3"),
        ],
        [InlineKeyboardButton("4", callback_data="4")],
    ]

    reply_markup = InlineKeyboardMarkup(custom_keyboard)

    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Seu livro está listado acima? Se sim, responda com o número dele. Se não, responda 4.",
        reply_markup=reply_markup,
    )


def choose(update: Update, context: CallbackContext) -> None:
    """Receives the option that the user has made for the book and delivers the pdf file."""

    query = update.callback_query
    query.answer()
    answer = query.data
    if str(answer) == "4":
        query.edit_message_text(
            text=f"Puxa, parece que você não achou o que estava procurando, né? Pedimos desculpas por isso."
        )
    else:
        query.edit_message_text(text="Um instantinho, vou trazer ele aqui para você.")
        book_options = context.user_data.get("books", "Not found")

        selected_book = None

        for book in book_options:
            if str(book["id"]) == answer:
                selected_book = book

        details_url = selected_book["details_url"]
        file_size = int(selected_book["size"].split(" ")[0])
        print("Now getting the link for the file...")
        file_link = get_book_download_source(details_url)
        print(f"Got it! It is: \n\t{file_link}")
        if file_size >= 50:
            context.bot.send_message(
                chat_id=update.effective_chat.id,
                text="Hm, por enquanto ainda não consigo te emprestar esse, parece que ele é maior do que 50Mb. Eu vou resolver isso em breve, peço desculpas.",
            )
            return
        if file_size >= 20:
            context.bot.send_message(
                chat_id=update.effective_chat.id,
                text="Olha, esse é um pouco mais pesado, então pode demorar uns dois ou três minutinhos, ok? É o tempo de esquentar aquele cafézinho bom...",
            )
            path_to_book = get_book(file_link, selected_book["title"])
            context.bot.sendDocument(
                chat_id=update.effective_chat.id,
                document=open(path_to_book, "rb"),
            )
            os.remove(path_to_book)
            query.edit_message_text(text="Aqui está. Faça bom proveito!")
            return
        try:
            context.bot.send_message(
                chat_id=update.effective_chat.id,
                text="Achei. Vou só conferir aqui e te entrego...",
            )
            print("filename =", selected_book["title"])
            context.bot.sendDocument(
                chat_id=update.effective_chat.id,
                filename=f'{selected_book["title"]}.pdf',
                document=file_link,
            )
            query.edit_message_text(text="Aqui está. Faça bom proveito!")
        except Exception as e:
            print("Um erro ocorreu:", str(e))
            query.edit_message_text(
                text="Puxa, perdão... Parece que há algo errado com o arquivo desse livro. :/ \nTente novamente algum comando /book!"
            )
