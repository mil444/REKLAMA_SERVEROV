const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "сервер",
    aliases: ["инфо-с"],
    run: async (client, message, args) => {
      function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime("en-us");
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? "-день" : "-дней") + " назад";
    };
    
    let verificationLevel = {
    "NONE": 'Отступает',
    "LOW": 'Низкий',
    "MEDIUM": 'Средний',
    "HIGH": 'Высокий',
    "VERY_HIGH": 'Очень высокий'
    }
        let region = {
          "eu-central": ":flag_eu: Central Europe",
          "singapore": ":flag_sg: Singapore",
          "us-central": ":flag_us: U.S. Central",
          "sydney": ":flag_au: Sydney",
          "us-east": ":flag_us: U.S. East",
          "us-south": ":flag_us: U.S. South",
          "us-west": ":flag_us: U.S. West",
          "eu-west": ":flag_eu: Western Europe",
          "vip-us-east": ":flag_us: VIP U.S. East",
          "london": ":flag_gb: London",
          "amsterdam": ":flag_nl: Amsterdam",
          "hongkong": ":flag_hk: Hong Kong",
          "russia": ":flag_ru: Russia",
          "southafrica": ":flag_za:  South Africa",
          "india": ":flag_in: india",
          "europe": ":flag_eu: Europe",
          "brazil": ":flag_br: Brazil"
      };


      const embed = new MessageEmbed()
        .setTitle (`Информация о сервере ${message.guild.name}`)
        .setColor('8400fa')
        .setThumbnail(message.guild.iconURL({dynamic : true}))  
        .addFields(
        {
          name: "По статусам ",
          value: `<:3832_status_online:768318169395363840> В сети | ${message.guild.members.cache.filter(m => m.user.presence.status == "online").size} 
          <:idle:778648366653374516> Не активен | ${message.guild.members.cache.filter(m => m.user.presence.status == "idle").size} 
          <:_DND_:778648064352321536> Не беспокойть | ${message.guild.members.cache.filter(m => m.user.presence.status == "dnd").size}
          <:status_offline:768318169382125578> Не в сети | ${message.guild.members.cache.filter(m => m.user.presence.status == "offline").size} `,
      inline: true
      },
      
      {
        name:  "Участники: ",
        value: `<:total_members:778851536675405826> Всего | ${message.guild.memberCount}
        <:bot:778851536964943892> Боты | ${message.guild.members.cache.filter(m => m.user.bot).size}
        <:member:778852102235095092> Участники | ${message.guild.members.cache.filter(m => !m.user.bot).size}` ,
        inline: true
      },
      {
        name:  "Каналы: ",
        value: `<:total_channels:778850975041454090> Всего | ${message.guild.channels.cache.size}
        <:Categoria:778668508996435978> Категория | ${message.guild.channels.cache.filter(channel => channel.type === 'category').size}
        <:text:778668322388181062> Текстовых | ${message.guild.channels.cache.filter(channel => channel.type === 'text').size}
        <:voice_channel:778668209666654288> Голосовых | ${message.guild.channels.cache.filter(channel => channel.type === 'voice').size}` ,
      },
      {
        name: "Владелец: ",
        value: message.guild.owner,
        inline: true,
          },
      {
        name: 'Количество Буст: ',
        value: message.guild.premiumSubscriptionCount >= 1 ? `На сервере \`${message.guild.premiumSubscriptionCount}\` Буст` : `Никто пока не бустил`,
        inline: true
        },
        {
          name: `Регион:`,
          value: region[message.guild.region],
          inline: true
        },

        {
          name: "Дата создание",
          value: `${message.channel.guild.createdAt.toLocaleDateString("en-us").substr(0, 16)}-\`${checkDays(message.channel.guild.createdAt)}\`` ,
          inline: true
          },
      {
        name: `Уровень проверки:`,
        value: verificationLevel[message.guild.verificationLevel],
        inline: true
      }
        )
        await message.channel.send(embed)
      }
    }

