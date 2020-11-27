const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "информация", 
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Категория информация')
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields({
            name: '+сервер',
            value: `Дам очень много полезные информация о сервере которые вы использовали`,
            inline: true,
          },
          {
            name: '+профиль',
            value: `Дам полезные информация о вас или о других `,
            inline: true,
          },
          {
            name: '+инфо-бот',
            value:  `⁣⁣Дам полезные информация о себя `,
            inline: true
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