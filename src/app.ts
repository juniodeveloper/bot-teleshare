import { bot } from './bot'
import Chat from './controllers/Chat'
import { INewChatMember } from './types/types'

bot.on('new_chat_members', async (ctx) => {
  await Chat.newChatMember(ctx, ctx.message as INewChatMember)
    .catch(error => {
      console.log(error)
    })
})
