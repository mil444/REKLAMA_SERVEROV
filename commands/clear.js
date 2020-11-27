  
module.exports = {
    name: "очистить",
    description: "очистить чат",

    async run (client, message, args) {

        const amount = args.join(" ");

        if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.channel.send('У вас не досточно прав чтобы очистить чат!!')
        
        if(!amount) return message.reply('пожалуйста, укажите количество сообщений, которые я должен удалить')

        if(amount > 100) return message.reply(`вы не можете очистить более 100 сообщений одновременно`)

        if(amount < 1) return message.reply(`вам нужно удалить хотя бы одно сообщение`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send('Успешно удалено')

    }
}