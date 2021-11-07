from telegram.update import Update
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
import random
from services.scraper_libgen import search_book

from utils.phrases import citations

# Test function
def start(update: Update, context):
    context.bot.send_message(
        chat_id=update.effective_chat.id, text="Qual livro você quer ler hoje?"
    )


# Function that responds to whatever message that is not a command with a random reading citation.
def echo(update: Update, context):

    context.bot.send_message(
        chat_id=update.effective_chat.id, text=random.choice(citations)
    )


def book(update: Update, context) -> None:
    """Receives the user search query for a book, and presents him the options"""

    book_asked = (" ".join(context.args)) if len(context.args) > 1 else context.args[0]
    print(book_asked)
    context.bot.send_message(
        chat_id=update.effective_chat.id,
        text="Opa, anotei aqui. Deixa eu verificar nas minhas prateleiras rapidinho...",
    )
    book_options = search_book(book_asked)
    for book in book_options:
        index = book_options.index(book)
        message = f'{index + 1}.\n\n{book["title"]}\n\nAutor(a):\n{book["author"]}'
        context.bot.send_message(chat_id=update.effective_chat.id, text=message)

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


def choose(update: Update, _) -> None:
    """Receives the option that the user has made for the book and delivers the pdf file."""

    query = update.callback_query
    query.answer()
    if str(query.data) == "4":
        query.edit_message_text(
            text=f"Puxa, parece que você não achou o que estava procurando, né? Pedimos desculpas por isso."
        )
    else:
        query.edit_message_text(text=f"Selected option: {query.data}")
