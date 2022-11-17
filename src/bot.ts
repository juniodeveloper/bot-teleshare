import env from 'dotenv'
import { Context, Telegraf } from 'telegraf'
env.config()

if (!process.env.BOT_TOKEN) {
  throw new Error('BOT_TOKEN undefined')
}

const bot = new Telegraf(process.env.BOT_TOKEN)

bot.launch()

export { bot, Context }
