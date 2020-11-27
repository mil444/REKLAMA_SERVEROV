const ms = require("ms");

module.exports = {
    
    name: "скажи",
    aliases: ["повтори"],
    desciption: "повторять собщение",

    async run (client, message, args) {

        let msg;
        msg = args.join(" ")

        if (!msg[0])
return message.channel.send('Напишите текст после команды, которую я должен повторить!')
        message.delete({timeout: 500})
        message.channel.send(msg, {disableMentions: "everyone"})
        //either you can filter it, or create a option where you defined the client or just do the option {disableMentions: "everyone"} in the send function
//Guys, how to make the bot on the say command if there are words everyone here the bot would ignore
        }
    }