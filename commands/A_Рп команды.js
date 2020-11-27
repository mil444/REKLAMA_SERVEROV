const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "рп-команды", 
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Категория Рп команды')
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields(
          {
            name: '+поцеловать',
            value: `Отправлаю GIF: тема про поцелуи`,
            inline: true,
          },
          {
            name: '+обнимать',
            value: `Отправлаю GIF: тема про обнимание`,
            inline: true,
          },

          {
            name: '+плакать',
            value:  `Отправлаю GIF: тема про плакать ⁣⁣`,
            inline: true
          },
          {
            name: '+стрелять',
            value:  `Отправлаю GIF: тема про стрелять ⁣⁣`,
            inline: true
          },
          {
            name: '+ударить',
            value:  `Отправлаю GIF: тема про ударь ⁣⁣`,
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