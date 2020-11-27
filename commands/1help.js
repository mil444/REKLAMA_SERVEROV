const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "помощь", 
    aliases: ["п","хелп"],
    async run (client, message, args){
        const embed = new MessageEmbed()
        .setTitle ('Все доступные команды')
      .setDescription(`Чтобы посмотреть команды пишите \`+название_категория\` Список разделов - ниже: Если вы нашли баг или что то другое, прошу писать нам через команду \` +поддержка\`  `)
        .setColor('880de9')
        .setFooter(`Марсен | Все права защищено`,client.user.displayAvatarURL())
        .addFields({
          name: '• Утилиты',
          value:`Новые особенности , полезные , интересные команды для  всех, кто находиться на вашем сервере`,
          inline: true,
        },
        {
          name: '• Информация⁣',
          value: `⁣⁣⁣Используй этого категорию, вы можете увидеть информация, статистика и т.д  `,
          inline: true,
        },
        {
          name: '• Модерация',
          value:  `⁣⁣Категория создан для модераторов чтобы они могли модерировать`,
          inline: true
        },
        {
          name: '• Рп-команды',
          value:  `⁣⁣Почувствуйте себя как в реальной жизни, через эту категорию`,
          inline: true
        },

        {
            name: '• Веселия',
            value:  `⁣⁣Интересные команды, которые ты точно не скучаешь но не факт`,
            inline: true
          },

      {
          name: '「Ссылкы」',
          value: ` [Добавлять бота на свой сервер](https://discord.com/api/oauth2/authorize?client_id=766665508266311730&permissions=8&scope=bot)
           [Мой жизнь Дискорд Zonodo](https://discord.gg/dwy6GNPTyy)`,
        }
        )
        message.channel.send(embed)
      }
    }