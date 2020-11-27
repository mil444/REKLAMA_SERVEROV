const Discord = require("discord.js");
const PlayStore = require("google-play-scraper");
const EmbedColor = ``;

//By Chill | :D pls thank me if works

module.exports = {
  name: "гугл",
  aliases: ["гугл-игра", "игра"],
  description: "Show Playstore Application Information Of Your Given Name!",
  usage: "Playstore <Application Name>",
  category: "New Commands",
  run: async (client, message, args) => {
    let price = {
      "FREE":"Бесплатно"
    }
    if (!args[0])
      return message.channel.send(
        `Пожалуйста, Дайте Что-Нибудь Для Поиска - ${message.author.username}`
      );

    PlayStore.search({
      term: args.join(" "),
      num: 1
    }).then(Data => {
      let App;

      try {
        App = JSON.parse(JSON.stringify(Data[0]));
      } catch (error) {
        return message.channel.send(
          `Приложение Не Найдено - ${message.author.username}!`
        );
      }

      let Embed = new Discord.MessageEmbed()
        .setColor(EmbedColor || "RANDOM")
        .setThumbnail(App.icon)
        .setURL(App.url)
        .setTitle(`${App.title}`)
        .setDescription(App.summary)
        .addField(`Цена:`, price[App.priceText], true)
        .addField(`Разработчик:`, App.developer, true)
        .addField(`Счет:`, App.scoreText, true)
        .setFooter(`По Просьбе: ${message.author.username}`)
        .setTimestamp();

      return message.channel.send(Embed);
    });
  }
};