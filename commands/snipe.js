const Discord = require('discord.js')
module.exports = {
    name: 'snipe',
    aliases: ["снайп"],
    run: async (client, message, args) => {
        const msg = client.snipes.get(message.channel.id)
        if(!msg)return message.channel.send("\`❌\` Нету удаленный собщение на этом канале \`❌\` ")
        const embed = new Discord.MessageEmbed()
        .setAuthor(msg.author, msg.profilphoto)
        .setDescription(msg.content)
        .setColor('RANDOM')
        .setFooter('Отправил')
        .setTimestamp(msg.time)
        if(msg.image)embed.setImage(msg.image)
        message.channel.send(embed)
    }
}
