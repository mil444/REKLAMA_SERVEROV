const Discord = require("discord.js")

module.exports = {
    name: "шар",
    description: "интересный команда",


    async run (client, message, args) {


const embed = new Discord.MessageEmbed()
.setDescription(':x: Вы должны ввести вапрос')
.setColor('71469c')
    if(!args[0]) return message.channel.send(embed)
    if(args[0].length < 1) return message.channel.send(embed)


    let i = ["Да!","Нет!","Может быть","Не может быть","Я не понимаю тебя!","вероятнее всего-нет",
    "вероятнее всего-да","А это уже секрет!","Спроси ещё раз","","Да!","Нет!","хм дай подумат",
    "пока не ясно, попробуй снова!"]

    let y = i[Math.floor(i.length * Math.random())]


    message.channel.send(y)
}
}