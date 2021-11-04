import os

from dotenv import load_dotenv, find_dotenv
import telegram
from telegram.ext import Updater, CommandHandler, MessageHandler, Filters
from telegram.ext.contexttypes import ContextTypes
from telegram.update import Update

load_dotenv(find_dotenv())
token = os.getenv('TELEGRAM_API_TOKEN')

print('token:', token)

#bot = telegram.Bot(token=token)
updater = Updater(token=token, use_context=True)
dispatcher = updater.dispatcher

def start(update, context):
    context.bot.send_message(chat_id=update.effective_chat.id, text="I'm a bot, please talk to me!")

start_handler = CommandHandler('start', start)
dispatcher.add_handler(start_handler)

def echo(update, context):
    
    context.bot.send_message(chat_id=update.effective_chat.id, text=update.message.text)

echo_handler = MessageHandler(Filters.text & (~Filters.command), echo)    
dispatcher.add_handler(echo_handler)

def book(update: Update, context):
    #book_asked = context.args[0]
    file = 'alexandria_telegram_bot/assets/demo.pdf'
    update.message.reply_document(document=open(file, 'rb'))
book_handler = CommandHandler('book', book)
dispatcher.add_handler(book_handler)

#updater.start_polling()