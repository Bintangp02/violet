// Made With 💙 by unx //
let handler = async m => m.reply(`
╭─ *「 Violet 」*
│
│ • *Link:* https://github.com/unx21/violet
│
│
│    _Join Official Group Violet-bot_
│
│ • *Heree:* https://chat.whatsapp.com/Ij7zZoDTDgHAi9TTfzu0ay
│
│  _Made With 💙 by unx_
╰────────
`.trim())
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^sc|script|scrape$/i
handler.register = true
handler.group = false
handler.private = false
handler.limit = false

module.exports = handler
