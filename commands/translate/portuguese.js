const translate = require('@iamtraction/google-translate');
module.exports = {
    name: 'portuguese',
    aliases: ['pt', 'br'],
    description: 'Translates any message to portuguese',
    cooldown: 5,
    async execute(client, message, args, Discord) {
        message.delete()
        let channel = message.channel
        if(!channel) return console.log("no channel")
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const query = args.join(" ");
        if(!query) return;
        
        const frdone = await translate(query, {to: 'pt'});
        //await channel.send(`${frdone.text}`)
        //await message.channel.send(endone.text)

        const embed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${frdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await channel.send(embed)
        if(!messageAttachment === null) {
            await channel.send(messageAttachment)
        }
        


    }
}
