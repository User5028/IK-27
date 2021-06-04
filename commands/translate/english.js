const translate = require('@iamtraction/google-translate');
module.exports = {
    name: 'english',
    aliases: ['en'],
    description: 'Translates any message to english',
    cooldown: 5,
    async execute(client, message, args, Discord) {
        message.delete()
        let channel = message.channel
        if(!channel) return console.log("no channel")
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const query = args.join(" ");
        if(!query) return;
        
        const endone = await translate(query, {to: 'en'});
        //await channel.send(`${endone.text}`)
        //await message.channel.send(endone.text)

        const embed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${endone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await channel.send(embed)
        if(!messageAttachment === null) {
            await channel.send(messageAttachment)
        }

    }
}
