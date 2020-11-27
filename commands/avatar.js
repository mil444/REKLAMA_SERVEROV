const { MessageEmbed } = require('discord.js')
module.exports = {
    name: "аватар",
    aliases: ["ава",], 
    async run (client, message, args){
  
    let member = message.mentions.users.first() || message.guild.members.cache.get() || message.author

  
    const embed = new MessageEmbed()
    .setTitle(`${member.username} аватар`)
    .setDescription(`[Avatar URL **${member.username}**](${member.displayAvatarURL({size: 1024})})`)
    .setImage(member.displayAvatarURL({size: 1024}))
    .setColor('ff85f4')
  
    message.channel.send(embed);
  }}
