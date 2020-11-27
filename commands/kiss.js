  
const Discord = require('discord.js');
module.exports = {
    name: "поцеловать", 
    aliases: ["целовать"],
    async run (client, message, args, level){
        try {    
          const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
            require('request')({url: 'https://nekos.life/api/kiss', json: true}, (req, res, json) => {
              if (member) {
              }
              const er = new Discord.MessageEmbed()
              .setDescription('Вам нужно упомянуть пользователя, чтобы поцеловать!')
              .setFooter('Или можно по айди')
              .setColor('71469c')
              if (member) {
                const embed = new Discord.MessageEmbed()
                .setTitle(message.author.username + ' поцелует ' + member.user.username)
                .setColor('a211da')
                .setDescription(message.author.username + ' поцелует ' + member.user.username + '!')
                .setImage(json.url);
        
                message.channel.send(embed)
              } else message.reply(er).then(m => m.delete({timeout: 7000}))
            });
            
          } catch (err) {
            message.channel.send('Это была ошибка!\n' + err).catch();

          }
        }}