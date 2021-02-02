let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Pulsa [085882065009]
│ • Dana [085882065009]
│ • Ovo [085882065009]
│ • Gopay [085882065009]
╰────
╭─「 Note 」
│ > Jika Ingin Donasi Silahkan, jika tidak ingin gpp :)
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
