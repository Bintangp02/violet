// Made With 💙 by unx //

let handler = m => m
handler.before = async function (m) {
  let id = m.chat
  if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/「 Brain Test 」/i.test(m.quoted.text)) return
  conn.braintest = conn.braintest ? conn.braintest : {}
  if (!(id in conn.braintest)) throw 'Soal itu telah berakhir!'
  if (m.quoted.id == conn.braintest[id][0].id) {
    let json = JSON.parse(JSON.stringify(conn.braintest[id][1]))
    // m.reply(JSON.stringify(json, null, '\t'))
    if (m.text.toLowerCase() == json.jawaban.toLowerCase()) {
      global.DATABASE._data.users[m.sender].uang += conn.braintest[id][2]
      m.reply(`*Benar!*\n+Rp${conn.braintest[id][2]}`)
      clearTimeout(conn.braintest[id][3])
      delete conn.braintest[id]
    } else if (m.text.toLowerCase().endsWith(json.jawaban.split` `[1])) m.reply(`*Dikit Lagi!*`)
    else m.reply(`*Salah!*`)
  }
}
handler.exp = 0

module.exports = handler