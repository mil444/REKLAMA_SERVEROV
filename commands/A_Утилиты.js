const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "утилиты", 
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Категория Утилиты')
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields({
            name: '+аватар',
            value: `Покажу аватар любых участников и дам ссылка на скачивание`,
            inline: true,
          },
          {
            name: '+кальку',
            value: `⁣⁣⁣Калькулятор, решаю все математический вопросы за секунд`,
            inline: true,
          },
          {
            name: '+гугл',
            value:  `⁣⁣Найду любой  гугл игру и дам про это информация`,
            inline: true
          },
          {
            name: '+snipe',
            value:  `⁣⁣Покажу вам последнее удаленное сообщение на канале`,
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