let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
⚠️ *INFO BOT* ⚠️
Instagram: ex.crem
Github: https://github.com/CR4CK3D

Note: Nih bot blm sepenuhnya bekerja dengan baik jadi maklumin kalo error

╠═〘 DONASI 〙 ═
╠➥ Pulsa: 0858-8206-5009
╠➥ Dana: 0858-8206-5009
╠➥ Gopay: 0858-8206-5009
╠➥ OVO: 0858-8206-5009
║>Mau donasi silahkan :D, Gak mau yaudah :v
╠═〘 INFO BOT 〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

