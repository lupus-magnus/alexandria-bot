from telegram.update import Update
import random

from utils.phrases import citations

# Test function
def start(update: Update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="Qual livro você quer ler hoje?")

# Function that responds to whatever message that is not a command with a random reading citation.
def echo(update: Update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text=random.choice(citations))

# Function that delivers book options and the book's pdf.
def book(update: Update, context):
    #book_asked = context.args[0]
    file = 'alexandria_telegram_bot/assets/demo.pdf'
    update.message.reply_document(document=open(file, 'rb'))
