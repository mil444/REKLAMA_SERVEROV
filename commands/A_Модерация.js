const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "модерация", 
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle('Категория Модерация')
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields(
          {
            name: '+очистить',
            value: "Удалю несколько собщение на канале которые вы использовали `Обязательные права участников: Управление сообщениями`",
            inline: true,
          },
          {
            name: '+бан',
            value: "Запречу пользователу зайти на сервер, и пишу пользователу о бане в лс `Обязательные права участников: Банить участников` ",
            inline: true,
          },

          {
            name: '+кик',
            value:  "Кикну пользователя, и пишу пользователу о кике в лс `Обязательные права участников: Кикнуть участников`",
            inline: false
          },
        {
            name: 'Полезные ссылкы ',
            value: ` [Добавлять бота на свой сервер](https://discord.com/api/oauth2/authorize?client_id=766665508266311730&permissions=8&scope=bot)
             [Мой жизнь Дискорд Zonodo](https://discord.gg/dwy6GNPTyy)`,
          }
          )
          message.channel.send(embed)
    }
}