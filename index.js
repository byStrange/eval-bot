// You send some javascript code to this bot and it returns the result of your code

const TeleBot = require('telebot');
// Please Use your API TOKEN
const TOKEN = "5090565444:AAFIGedwFbYvb7djQmgf_cinwKyXZsBsFcw";
const bot = new TeleBot(TOKEN);



let c = console
bot.on('text', function (msg) {
    let console = {
        log(s) {
                msg.reply.text(
                    s.toString()
                )
        }
    }
function evaluvate(text)  {
    try {
        eval(text)
    }
    catch (err) {
        msg.reply.text(err.toString())
        c.log(err)
    }
}
        console.log(evaluvate(msg.text).toString())
});

bot.start();
