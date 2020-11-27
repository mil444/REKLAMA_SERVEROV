const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "verify",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Верификация`,message.guild.iconURL({dynamic : true}) )
        .setDescription(`Пожалуйста, укажите ошибку!`)
        .setColor('312d2d')

    if (!args[0]) return message.reply(embed);
    const embed2 = new MessageEmbed()
    .setAuthor(`Верификация`,message.guild.iconURL({dynamic : true}) )
    .setDescription(`Пожалуйста, укажите действительный ошибку!`)
    .setColor('312d2d')

    if (args[0] === "баг") return message.reply(embed2);
    args = args.join(" ");
    const embed3 = new MessageEmbed()
    .setAuthor(`Верификация`, message.guild.iconURL({dynamic : true}))
    .setDescription(`Ждите пока вам ответили`)
    .setFooter(`by: Bot`)
    .setColor('312d2d')
    message.reply(embed3);
    const content = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(`
    Проблема/Ошибка:
    ~~----------------------------------------------------------------~~
    ${args}
    ~~----------------------------------------------------------------~~
    `)
    client.channels.cache.get('777149741514883092').send(content)
}
}