const { MessageEmbed } = require('discord.js');


module.exports = {
    name: "профиль",
    aliases: ["юзер","пф"],
    run: async (client, message, args) => {
        function checkDays(date) {
            let now = new Date();
            let diff = now.getTime() - date.getTime("en-us");
            let days = Math.floor(diff / 86400000);
            return days + (days == 1 ? "-день" : "-дней") + " назад";
        };

        let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        let status;
        switch (user.presence.status) {
            case 'online':
                status = '<:3832_status_online:768318169395363840> в сети'; break; 
                case 'idle':
                    status = '<:9693_Idle_Status:768318169310822410> не активный'; break;
                    case 'offline':
                        status = '<:8874_status_offline:768318169382125578> нет в сети'; break;
                        case 'dnd':
                            status = '<:6290_DND_Status:768318169336512512> не беспокоить'; break;
        }

        const embed = new MessageEmbed()
            .setTitle(`${user.user.username} стата`)
            .setDescription(`**Статус: ${status}
            ${user.user.bot ? 'Пользователь: Бот' : 'Пользователь: Человек'}
        **`)
            .setColor(`ec0afd`)
            .setThumbnail(user.user.displayAvatarURL({dynamic : true}))
            .setFooter(`Id: ${user.user.id} `)
            .addFields(
                {
                    name: 'Дата создания аккаунта: ',
                    value: `${user.user.createdAt.toLocaleDateString("en-us").substr(0, 16)}-\`${checkDays(user.user.createdAt)}\``,
                    inline: true
                },
                {
                    name: 'Дата входа на сервер: ',
                    value: `${user.joinedAt.toLocaleDateString("en-us").substr(0, 16)}-\`${checkDays(user.joinedAt)}\``,
                    inline: true
                },
            )
        await message.channel.send(embed)
    }
}
