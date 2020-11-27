const Discord = require('discord.js');

const client = new Discord.Client();

const { token } = require('./config.json');

const command = require('./command');

const { readdirSync } = require('fs');

const { join } = require('path');

client.commands= new Discord.Collection();

const prefix = '-';
//You can change the prefix if you like. It doesn't have to be ! or ;


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () =>{ // ивент, когда бот запускается https://discord.js.org/#/docs/main/stable/class/Client?scrollTo=e-ready
  client.generateInvite("ADMINISTRATOR").then(invite => console.log(`Ссылка на добавление ${invite}`))
  console.log(`Привет! ${client.user.tag} запустился!`) // информация в консоль про успешный запуск
    client.user.setPresence({
    status: 'dnd',  //  visibility 
    activity: {
        name: `YouTube`, // thing that comes after what u chose below
        type: "WATCHING" // whatever u want, can be playing, watching etc
    }
  })
})


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch (error){
            console.error(error);
        }
    }
})

client.login(process.env.BOT_TOKEN);

command(client, 'вопрос', (message) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setTitle('Вопрос! - Ответ!')
    .setColor('BLUE')
    .setDescription(`**Для начало советую читать правила!!\n<#747489589765079081> <#747461631281201172>**\n\n
    Часто задаваемые вопросы 
    **1** Где рекламировать своего бот?
    **2** Где рекламировать свой сервер?
    **3** Где рекламировать свой Соц-сетей?
    **4** Как стать партнёрам нашего сервера
    **5**.Где писать жалобы + идей сервера

    Если у вас другой вапрос просим писать на канал <#747508565866053642> 

    
    чтобы узнать ответ напишите команду **[ - цифру вопрос]**
    `)
    .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
    message.channel.send(embed) 
})

command(client, 'хелп', (message) => {
    if (message.author.bot) return;
    const embed = new Discord.MessageEmbed()
    .setTitle(':wrench: Утилиты')
    .setColor('BLUE')
    .setDescription(`
    -вопрос \`( часто задаваемые вопросы )\`
    -say \`( писать от лица бота )\`
    -очистить \`( удаляет сообщения )\``)
    .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
    message.channel.send(embed)
})

    command(client, '1 вопрос', (message) => {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        .setTitle('Вопрос! - Ответ!')
        .setColor('BLUE')
        .setDescription(`**Ответ на первый вопрос**\n
         **${message.author.username} Ты можешь прорекламировать своего бота в каналах**\n┏━━━━━━━Каналы━━━━━━━┓\n⁣       <#769182333357522974>\n⁣       <#769182487599251486>\n⁣       <#769182583073931304>\n⁣       <#769182626878717983>\n⁣       <#769182715089649715>\n⁣       <#769183076496441354>\n       <#769182968202788884>\n⁣       <#769183224390746172>\n┗━━━━━━━Каналы━━━━━━━┛`)
        .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
        message.channel.send(embed) 
    })

    command(client, '2 вопрос', (message) => {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        .setTitle('Вопрос! - Ответ!')
        .setColor('BLUE')
        .setDescription(`**Ответ на второй вопрос**\n
         **${message.author.username} Ты можешь рекламировать свой сервер там**\n┏━━━━━━━Каналы━━━━━━━┓\n⁣       <#747492863759089795>\n⁣       <#747490303618973697>
         ⁣       <#747490605004881980>\n⁣       <#747490851785277481>\n⁣       <#747491175602192496>\n       <#747491715228762162>
                <#747492393636593674>\n       <#747493280396345364>\n       <#747493665856815106>
         ┗━━━━━━━Каналы━━━━━━━┛`)
        .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
        message.channel.send(embed) 
    })

    command(client, '3 вопрос', (message) => {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        .setTitle('Вопрос! - Ответ!')
        .setColor('BLUE')
        .setDescription(`**Ответ на третий  вопрос**\n
         **${message.author.username} Ты можешь рекламировать свой сервер там**\n┏━━━━━━━Каналы━━━━━━━┓\n⁣       <#747495018427842681>\n⁣       <#747499242834100305>
         ⁣       <#747850258276679821>\n⁣       <#750336104166850570>\n⁣       <#747499922349228205>\n⁣       <#769840932156735498>\n       <#747501125330272266>
         ┗━━━━━━━Каналы━━━━━━━┛`)
        .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
        message.channel.send(embed) 
    })

    command(client, '4 вопрос', (message) => {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        .setTitle('Вопрос! - Ответ!')
        .setColor('BLUE')
        .setDescription(`**Ответ на четвёртый  вопрос**\n
         **${message.author.username}-Чтобы стать партнёрам нашем сервере**

         **1** Количестьво участник 50+ участник
         **2**Реклама 2 сервер
          - Дискорд Zonodo 
          - Реклама серверов
           
          <#747485289156575333>-информация
          Если вашем сервере 750-участник 
          +Пинг и  ссылка`)
        .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
        message.channel.send(embed) 
    })

    command(client, '5 вопрос', (message) => {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
        .setTitle('Вопрос! - Ответ!')
        .setColor('BLUE')
        .setDescription(`**Ответ на пятый  вопрос**\n
         ${message.author.username}-Если вы думаете что на серверу что то не хватает можете писать 
         на - <#747501463026008094> туда,
         
         Если участник сервера нарушал правила можете писать туда -<#747525909359230986> `)
        .setThumbnail('https://media.discordapp.net/attachments/747748428636880927/769839862496624670/e96a61488e5d5021a685b9a89dca7c6a.png?width=72&height=72')
        message.channel.send(embed) 
    })