from telegram.update import Update
import random
from services.scraper import search_book
import json

from utils.phrases import citations

# Test function
def start(update: Update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Qual livro você quer ler hoje?")

# Function that responds to whatever message that is not a command with a random reading citation.
def echo(update: Update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=random.choice(citations))

# Function that delivers book options and the book's pdf.
def book(update: Update, context) -> None:
    book_asked = (" ".join(context.args))
    print(book_asked)
    #file = 'alexandria_telegram_bot/assets/demo.pdf'
    #update.message.reply_document(document=open(file, 'rb'))
    context.bot.send_message(chat_id=update.effective_chat.id, text="Opa, anotei aqui. Deixa eu verificar nas minhas prateleiras rapidinho...")
    book_options = search_book(book_asked)
    for book in book_options:
        index = book_options.index(book)
        caption=f'{index + 1}.\n\n{book["title"]}\n\nAuthor:\n{book["author"]}'    
        update.message.reply_photo(book['image'], caption=caption)
    context.bot.send_message(chat_id=update.effective_chat.id, text="Seu livro está listado acima? Se sim, responda com o número dele.")
