const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "поддержка",
    aliases: ["support","жалоба"],
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
        .setAuthor(`Поддержка 💻`, `https://media.discordapp.net/attachments/757630045274767493/776086270131568670/114-1142564_technical-support-technical-support-tech-support-icon.png?width=606&height=606`)
        .setDescription(`Пожалуйста, укажите ошибку!`)
        .setColor('312d2d')

    if (!args[0]) return message.reply(embed);
    const embed2 = new MessageEmbed()
    .setAuthor(`Поддержка 💻`, `https://media.discordapp.net/attachments/757630045274767493/776086270131568670/114-1142564_technical-support-technical-support-tech-support-icon.png?width=606&height=606`)
    .setDescription(`Пожалуйста, укажите действительный ошибку!`)
    .setColor('312d2d')

    if (args[0] === "баг") return message.reply(embed2);
    args = args.join(" ");
    const embed3 = new MessageEmbed()
    .setAuthor(`Поддержка 💻`, `https://media.discordapp.net/attachments/757630045274767493/776086270131568670/114-1142564_technical-support-technical-support-tech-support-icon.png?width=606&height=606`)
    .setDescription(`Спасибо, что прислали ошибку!`)
    .setFooter(`Мы рассмотрим ошибку`)
    .setColor('312d2d')
    message.reply(embed3);
    const content = new MessageEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL())
    .setDescription(` Названия сервера: **${message.guild.name}**
    Id: ${message.author.id} 
    Ошибка:
    ~~----------------------------------------------------------------~~
    ${args}
    ~~----------------------------------------------------------------~~
    `)
    client.channels.cache.get('776089098238165012').send(content)
}
}