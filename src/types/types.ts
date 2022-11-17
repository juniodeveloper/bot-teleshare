export interface Message {
   message_id?: number,
   from?: {
      id: number,
      is_bot: boolean,
      first_name: string
   },
   chat?: {
      id: number,
      title: string,
      type: string
   },
   sender_chat: {
      id: number,
      title: string,
      type: string
   },
   date?: number,
   text?: string,
   entities?: Array<{
      offset: number,
      length: number,
      type: string
   }>
}

export interface IChatAdministrators {
   user?: {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string,
      language_code: string,
      is_premium: boolean
   },
   status?: string,
   is_anonymous?: boolean
}

export interface IAdmins {
   admins?: Array<IChatAdministrators>
}

export interface INewChatMember {
   message_id?: number,
   from?: {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string
   },
   chat?: {
      id: number,
      title: string,
      type: string
   },
   date?: number,
   new_chat_participant?: {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string
   },
   new_chat_member?: {
      id: number,
      is_bot: boolean,
      first_name: string,
      username: string
   },
}
