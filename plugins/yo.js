let util = require('util')
let path = require('path')

let handler = async (m, { conn }) => {
let sticker = './src/sticker/yo.webp'
conn.sendFile(m.chat, sticker, 'yo.webp', null, m, true, {
type: 'stickerMessage', // paksa tanpa convert di ffmpeg
ptt: true // true diatas ga work, sebab dipaksa tanpa convert ;v
})
}
handler.customPrefix = /(H(h[a|i]lo)|(yo(o))/
handler.command = new RegExp
module.exports = handler