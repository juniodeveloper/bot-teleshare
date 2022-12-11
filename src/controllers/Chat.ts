import { Context } from '../bot'
import { INewChatMember, Message } from '../types/types'

class Chat {

  async newChatMember (ctx: Context, message: INewChatMember): Promise<void> {

    const { new_chat_member, message_id } = message

    if (new_chat_member) {
      const { is_bot, id, first_name } = new_chat_member
      if (is_bot) {
        await ctx.banChatMember(id)
        await ctx.sendMessage('Bots 🤖 não são permitidos aqui.', { reply_to_message_id: message_id })
      } else {
        await ctx.reply(
          '*Bem vindo* ' +
            `[${first_name}](tg://user?id=${id})\n\n ${welcomeText}`,
          {
            parse_mode: 'Markdown',
            reply_to_message_id: message_id,
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: 'Canal SoftsApps',
                    url: 'https://t.me/softsapps_channel'
                  }
                ]
              ]
            }
          }
        )
      }
    }

  }

  async userSendUrl (ctx: Context, message: Message): Promise<void> {

    const { entities, message_id, from, sender_chat } = message

    if (sender_chat) {
      if (sender_chat.id === -1001838072636) return
    }

    if (!entities) return

    const { type } = entities[0]

    if (type === 'url') {
      await ctx.sendMessage(
        `[${from?.first_name}](tg://user?id=${from?.id}) Não é permitido enviar links neste Grupo!`,
        {
          parse_mode: 'Markdown',
          reply_to_message_id: message_id
        }
      )
      await ctx.deleteMessage(message_id)
    }

  }

}

export default new Chat()

const welcomeText: string = '✅ SoftsApps Developer \n\n' +
'Trabalhamos com as seguintes tecnologias\n\n' +
'- Flutter - Dart\n\n' +
'- JavaScript -Typescript\n\n' +
'- Next.js - React.js\n\n' +
'- Firebase - MongoDB\n\n' +
'- Desenvolvimento de API\n\n' +
'- Micro Serviços\n\n' +
'- Fazemos instalações de certificado SSL em seu servidor\n\n' +
'- Configuramos seu servidor para hospedagem de seu site\n\n' +
'👌 Fazermos integrações de pagamentos para seu comércio ou sistema online.\n\n'
