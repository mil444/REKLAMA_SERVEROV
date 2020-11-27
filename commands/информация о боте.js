const { MessageEmbed } = require('discord.js');
const { version } = require('discord.js')

module.exports = {
    name: "инфо-бот",
    aliases: ["статс","бот"],
    run: async (client, message, args) => {

    function duration(ms) {
      const sec = Math.floor((ms / 1000) % 60).toString()
      const min = Math.floor((ms / (1000 * 60)) % 60).toString()
      const hrs = Math.floor((ms / (1000 * 60 * 60)) % 60).toString()
      const days = Math.floor((ms / (1000 * 60 * 60 * 24)) % 60).toString()
      return `${days.padStart(1, '0')} день, ${hrs.padStart(2, '0')} час, ${min.padStart(2, '0')} минут, ${sec.padStart(2, '0')} секунд.`
  }

  function checkDays(date) {
    let now = new Date();
    let diff = now.getTime() - date.getTime("en-us");
    let days = Math.floor(diff / 86400000);
    return days + (days == 1 ? "-день" : "-дней") + " назад";
};
    const embed = new MessageEmbed()
  .setThumbnail(client.user.displayAvatarURL())
  .setTitle('Бот статс')
  .setColor('#1b1b1b')
  .setFooter('Владелец: ᴋᴇᴇɴᴢʜᴀʟ#1782')
  .addFields(
      {
          name: 'Серверы',
          value: `Боту использует ${client.guilds.cache.size} серверы.`,
          inline: true
      },
      {
        name: 'Количество каналы',
        value: `Всего  ${client.channels.cache.size} каналов.`,
        inline: true
    },
  {
    name: 'Пинг',
    value: `${Math.round(client.ws.ping)}ms`,
    inline: true
},
{
  name: 'Пользователей',
  value: `${client.users.cache.size} Пользователей пользуется`,
  inline: true
},
{
  name: 'Версия',
  value: `Discord.js: v${version} `,
  inline: true
},

{
  name: 'Рабочее время',
  value: `${duration(client.uptime)}`,
  inline: true
},
{
name: 'Время создание',
value: `${client.user.createdAt.toLocaleDateString("en-us").substr(0, 16)}-\`${checkDays(client.user.createdAt)}\``,
inline: true
},
{
  name: 'Ссылкы',
  value: `[Добавлять бота на свой сервер](https://discord.com/api/oauth2/authorize?client_id=766665508266311730&permissions=8&scope=bot)
  [Мой жизнь Дискорд Zonodo](https://discord.gg/dwy6GNPTyy)`,
}
      )
      message.channel.send(embed)
    }
}
