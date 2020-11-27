module.exports = {
    
    name: "say",
    desciption: "повторять собщение",

    async run (client, message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }