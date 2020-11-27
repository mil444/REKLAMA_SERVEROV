const math = require('mathjs');

const Discord = require('discord.js');

module.exports = {
    name: "кальку", 
    aliases: ["калькулятор"],
    description: "Get the answer to a math problem",


    async run (client, message, args){

        if(!args[0]) return message.channel.send('Пожалуйста, задайте вопрос');

        let resp;

        try {
            resp = math.evaluate(args.join(" "))
        } catch (e) {
            return message.channel.send('Пожалуйста, предоставьте **действительный** вопрос')
        }

        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Калькулятор')
        .addField('Вопрос', `\`\`\`css\n${args.join(' ')}\`\`\``)
        .addField('Ответ', `\`\`\`css\n${resp}\`\`\``)

        message.channel.send(embed);

    }
}