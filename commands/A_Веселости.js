const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "веселия", 
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Категория веселия')
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields(
          {
            name: '+шар',
            value: `⁣⁣⁣Отвечу на любой вопросы да или нет`,
            inline: true,
          },
          {
            name: `+скажи`,
            value: `Повторяю ваша  сообщение после команды скажи`,
            inline: true,
          },
        {
            name: 'Полезные ссылкы  ⁣  ',
            value: ` [Добавлять бота на свой сервер](https://discord.com/api/oauth2/authorize?client_id=766665508266311730&permissions=8&scope=bot)
             [Мой жизнь Дискорд Zonodo](https://discord.gg/dwy6GNPTyy)`,
          }
          )
          message.channel.send(embed)
    }
}