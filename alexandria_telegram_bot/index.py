import os
from dotenv import load_dotenv, find_dotenv
from telegram.ext import (
    Updater,
    CommandHandler,
    MessageHandler,
    Filters,
    CallbackQueryHandler,
)
from controllers.controllers import start, book, echo, choose

load_dotenv(find_dotenv())
token = os.getenv("TELEGRAM_API_TOKEN")

updater = Updater(token=token, use_context=True)
dispatcher = updater.dispatcher


def initialize_bot():
    env = os.getenv("ENV_MODE")
    if env == "development":
        updater.start_polling()
    else:
        PORT = int(os.environ.get("PORT", "8443"))
        updater.start_webhook(
            listen="0.0.0.0",
            port=PORT,
            url_path=token,
            webhook_url="https://alexandria-telegram-bot.herokuapp.com/" + token,
        )
    print(f"Bot has been initialized in {env} mode.")


dispatcher.add_handler(CommandHandler("start", start))
dispatcher.add_handler(MessageHandler(Filters.text & (~Filters.command), echo))
dispatcher.add_handler(CommandHandler("book", book))
dispatcher.add_handler(CallbackQueryHandler(choose))

initialize_bot()
