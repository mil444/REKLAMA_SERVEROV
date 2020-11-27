  const Discord = require('discord.js')
module.exports = {
    name: "очистить",
    aliases: ["удалить"],
    description: "очистить чат",

    async run (client, message, args) {

        const amount = args.join(" ");

        const embed = new Discord.MessageEmbed()
        .setDescription('У вас не досточно прав чтобы очистить чат!!')
        .setColor('71469c')
        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send(embed).then(m => m.delete({timeout: 5000}))

        const embe = new Discord.MessageEmbed()
        .setDescription('Пожалуйста, укажите \`количество сообщений\`, которые я должен удалить')
        .setColor('71469c')
        if(!amount) return message.reply(embe).then(m => m.delete({timeout: 5000}))

        const emb = new Discord.MessageEmbed()
        .setDescription('Я не могу очистить более \`100\` сообщений одновременно')
        .setColor('71469c')
        
        if(amount > 100) return message.reply(emb).then(m => m.delete({timeout: 5000}))

        const em = new Discord.MessageEmbed()
        .setDescription('Вам нужно удалить хотя бы одно сообщение')
        .setColor('71469c')

        if(amount < 1) return message.reply(emb).then(m => m.delete({timeout: 5000}))

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )})

    const e = new Discord.MessageEmbed()
    .setDescription(`Успешно удалено \`${amount}\` собщение`)
    .setColor('71469c')

    message.channel.send(e).then(m => m.delete({timeout: 6000}))
            }
    }