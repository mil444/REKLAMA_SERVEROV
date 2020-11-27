  
const Discord = require('discord.js');
module.exports = {
    name: "обнимать", 
    aliases: ["обнять"],
    async run (client, message, args, level){
        try {    
            let member = message.mentions.members.first();
            require('request')({url: 'https://nekos.life/api/hug', json: true}, (req, res, json) => {
              if (member) {
                let embed = new Discord.MessageEmbed()
                .setTitle(message.author.username + ' обнимает ' + member.user.username)
                .setColor('#eeeeee')
                .setDescription(message.author.username + ' обнимает ' + member.user.username + '!')
                .setImage(json.url);
        
                message.channel.send(embed);
              } else message.reply('Вам нужно упомянуть пользователя, чтобы обнимать!');
            });
            
          } catch (err) {
            message.channel.send('Это была ошибка!\n' + err).catch();
          }
        }}
