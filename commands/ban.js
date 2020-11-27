const Discord = require('discord.js');

module.exports = {
    name: "бан",
    description: "Выгнать участника",

    async run (client, message, args) {

        const per = new Discord.MessageEmbed()
        .setDescription('У вас недостаточно прав для использования этой команды!!!')
        .setColor('9b0a0a')
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(per).then(m => m.delete({timeout: 6000}))
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(per).then(m => m.delete({timeout: 6000}))
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        const ar = new Discord.MessageEmbed()
        .setDescription(`+бан \`[пользователь]\` \`[причина]\``)
        .setColor('9b0a0a')
        if(!args[0]) return message.channel.send(ar).then(m => m.delete({timeout: 6000}))

        if(!member) return message.channel.send(ar).then(m => m.delete({timeout: 6000}))

        const owner = new Discord.MessageEmbed()
        .setDescription(`Я не могу забанить этого пользователя
        Потому пользователь что он являются модератором/администратором 
        Либо их самая высокая роль выше моей `)
        .setColor('9b0a0a')


              if (member.id === message.author.id) return message.channel.send(ar);

        if(member.hasPermission('ADMINISTRATOR' ) )  return message.channel.send(owner).then(m => m.delete({timeout: 8000}))

            if(member.hasPermission('BAN_MEMBERS') )  return message.channel.send(owner).then(m => m.delete({timeout: 8000}))
            if(member.hasPermission('KICK_MEMBERS') )  return message.channel.send(owner).then(m => m.delete({timeout: 8000}))
        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Не указана!';

        if (!member.user.bot) {
            const embed = new Discord.MessageEmbed()
            .setTitle('【:warning:】Бан!')
            .setDescription(`**Вы были забанены на сервере:\`${message.guild.name}!\`
            Причина: ${reason}
            Забанил: ${message.author}**`)
            .setColor('ff6200')
            .setThumbnail(message.guild.iconURL({dynamic : true})) 
            .setFooter('Время бан:')
            .setTimestamp()
            member.send(embed);
        }

        member.ban({
            reason: reason
        });

        const kickembed = new Discord.MessageEmbed()
        .setTitle('【:warning:】Участник забанен')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('▬▬Забанен▬▬', member)
        .addField('▬▬Забанил▬▬', message.author)
        .addField('▬▬Причина▬▬', reason)
        .setFooter('Время бан', client.user.displayAvatarURL())
        .setColor('ff0000')
        .setTimestamp()

        message.channel.send(kickembed);
    }
}