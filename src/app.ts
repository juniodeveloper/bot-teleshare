import { bot } from './bot'
import Chat from './controllers/Chat'
import { IChatAdministrators, INewChatMember, Message } from './types/types'

let administrators: Array<IChatAdministrators>

bot.start(async (ctx) => {
  try {

    const admins = await ctx.getChatAdministrators()

    administrators = admins as Array<IChatAdministrators>

  } catch (error) {
    console.log(error)
  }
})

bot.on('message', async (ctx) => {
  Chat.userSendUrl(ctx, ctx.message as Message)
    .catch(error => {
      console.log(error)
    })
})

bot.on('new_chat_members', async (ctx) => {
  await Chat.newChatMember(ctx, ctx.message as INewChatMember)
    .catch(error => {
      console.log(error)
    })
})
