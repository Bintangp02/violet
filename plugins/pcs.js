let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/pcs.webp'
conn.sendFile(m.chat, sticker, 'pcs.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /(onegai)|(arigato(o|u))|(makas(e|i)h)|(thank(s))/
handler.command = new RegExp
module.exports = handler