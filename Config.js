const fs = require('fs')
const chalk = require('chalk')

//contact details
global.ownernumber =  "6281511073357"
global.ownername = "BAYU RIZKI ZULFIKRI"
global.ytname = "YT: LASUTTEAM_OFFICE"
global.socialm = "GitHub: cacacr4ck"
global.location = "Indonesia"

global.ownername = 'BAYU RIZKI ZULFIKRI' //owner name
global.botname = 'ZF-Assistant' //name of the bot

//sticker details
global.stickername = '💙𓆩‎✘ZF-Assistant✘𓆪_✰'
global.packname = 'Sticker By'
global.author = 'ZF-Assistant'
//console view/theme
global.themeemoji = '🧩'
global.wm = "ZF-Assistant."

//theme link
global.link = ''

//custom prefix
global.prefa = ['.']

//false=disable and true=enable
global.autoRecording = false //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = false //auto update bio
global.anti212 = false //auto block +212
global.autoread_status = false //auto view status/story



//reply messages
global.mess = {
    done: 'Done !',
    prem: 'This feature can be used by premium user only',
    admin: 'This feature can be used by admin only',
    botAdmin: 'This feature can only be used when the bot is a group admin ',
    owner: 'This feature can be used by owner only',
    group: 'This feature is only for groups',
    private: 'This feature is only for private chats',
    wait: 'In process... ',    
    error: 'Error!',
}

global.thumb = fs.readFileSync('./Gallery/thumb.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
