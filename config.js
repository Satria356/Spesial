/*

Thanks to

• Nurutomo
• Arrifb
• Ibnusyawall
• Cakrayp
• MRHRTZ hanif
• Bochilgaming
• unx
• and all contributor

*/

let fs = require('fs')
let chalk = require('chalk')

//global.mod = JSON.parse(fs.readFileSync('./src/moderator.json')) 
global.owner = ['6283811034750', '6287810007292'] // Your Number
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit

global.APIs = { // API Prefix
  // nama: 'https://website'
  rey: 'https://reysekhaa.herokuapp.com', // ERORR? CHANGED TO https://reysekhaa.herokuapp.com
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://api.neoxr.my.id',
  nrtm: 'https://nurutomo.herokuapp.com',
  pencarikode: 'https://api.chipa.xyz',
  xteam: 'https://api.xteam.xyz',
  fxc7: 'https://api-xcoders.xyz',
  waifupics: 'https://api.waifu.pics',
  cakra: 'https://cakrayp.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zekais: 'http://api.zekais.com',
  zeks: 'https://api.zeks.me',
  amel: 'https://melcanz.com',
}
global.APIKeys = { // APIKey in here
  // 'https://website': 'apikey'
  'https://api-xcoders.xyz': 'APIKEY', // REGISTER ON WEB
  'https://sekha.me': 'apirey', // ERORR? CHANGED TO https://reysekhaa.herokuapp.com
  'https://hardianto.xyz': 'hardianto', // UNLIMITED
  'https://api.neoxr.my.id': 'yourkey', // UNLIMITED
  'https://api.chipa.xyz': 'APIKEY', // REGISTER ON WEB
  'https://cakrayp.herokuapp.com': 'cakrayp24Q6', // UNLIMITED
  'https://api.xteam.xyz': 'APIKEY', // REGISTER ON WEB
  'https://zahirr-web.herokuapp.com': 'zahirgans', // UNLIMITED
  'https://api.zeks.me': 'apivinz', // LIMIT 400 day 
  'http://api.zekais.com',: 'APIKEY', // REGISTER
  'https://melcanz.com': 'YOURAPIKEY' // Register dulu
}


// Sticker WM
global.packname = '© Fahri'
global.author = '@ _Satria78'

global.wm = '© R E A L - B O T'
global.wait = ' _Sedang Memproses..._ '
global.eror = '× Error Coba lagi nanti'
global.benar = '✓'
global.salah = '×'
global.dikit = 'hampir benar'
global.footer = '© Fahri'
global.lw = 'https://reysekhaa.herokuapp.com/api/textpro/greenhoror?apikey=apirey&text='
global.reyganz= 'https://reysekhaa.herokuapp.com/api/wallpaper/ukhty?apikey='

global.multiplier = 9999

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
