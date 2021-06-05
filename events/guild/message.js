require('dotenv').config
const fs = require('fs')
const translate = require('@iamtraction/google-translate');
const cooldowns = new Map()


module.exports = async (Discord, client, message) => {
    let prefix = process.env.PREFIX
    const member = message.member
    if(message.author.bot) return;

    const king_rules = message.guild.channels.cache.get('841326527965691925');
    const king_news = message.guild.channels.cache.get('841531696474095647');
    const community = message.guild.channels.cache.get('841576041041494046');

    //King-rules
    if(message.channel.id === '841326527965691925') {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const args = message.content.split(/ +/);
        const query = args.join(" ");
        const eschannel = message.guild.channels.cache.get('842546956295208990');
        const brchannel = message.guild.channels.cache.get('842547400057159710');
        const dechannel = message.guild.channels.cache.get('842548316599353377');
        const ruchannel = message.guild.channels.cache.get('842547217650941983');
        const frchannel = message.guild.channels.cache.get('842547706181320715');
        if(query){


        const esdone = await translate(query, {to: 'es'});
        const esembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${esdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
        await eschannel.send(esembed)


        const brdone = await translate(query, {to: 'pt'});
        const brembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${brdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await brchannel.send(brembed)


        const dedone = await translate(query, {to: 'de'});
        const deembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${dedone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await dechannel.send(deembed)


        const rudone = await translate(query, {to: 'ru'});
        const ruembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${rudone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await ruchannel.send(ruembed)

        
        const frdone = await translate(query, {to: 'fr'});
        const frembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${frdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
    }
        
        if(messageAttachment) {
            await frchannel.send(messageAttachment)
            await ruchannel.send(messageAttachment)
            await dechannel.send(messageAttachment)
            await brchannel.send(messageAttachment)
            await eschannel.send(messageAttachment)
        }
    }
    //King-news
    if(message.channel.id === '841531696474095647') {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const args = message.content.split(/ +/);
        const query = args.join(" ");
        const eschannel = message.guild.channels.cache.get('842550513563861002');
        const brchannel = message.guild.channels.cache.get('842550697924755467');
        const dechannel = message.guild.channels.cache.get('842551009289175100');
        const ruchannel = message.guild.channels.cache.get('842550175725387786');
        const frchannel = message.guild.channels.cache.get('842549678667202590');
        if(query){


        const esdone = await translate(query, {to: 'es'});
        const esembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${esdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
        await eschannel.send(esembed)


        const brdone = await translate(query, {to: 'pt'});
        const brembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${brdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await brchannel.send(brembed)


        const dedone = await translate(query, {to: 'de'});
        const deembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${dedone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await dechannel.send(deembed)


        const rudone = await translate(query, {to: 'ru'});
        const ruembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${rudone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await ruchannel.send(ruembed)

        
        const frdone = await translate(query, {to: 'fr'});
        const frembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${frdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
    }
        
        if(messageAttachment) {
            await frchannel.send(messageAttachment)
            await ruchannel.send(messageAttachment)
            await dechannel.send(messageAttachment)
            await brchannel.send(messageAttachment)
            await eschannel.send(messageAttachment)
        }
    }
    //community
    if(message.channel.id === '841576041041494046') {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const args = message.content.split(/ +/);
        const query = args.join(" ");
        const eschannel = message.guild.channels.cache.get('842172297095675934');
        const brchannel = message.guild.channels.cache.get('842186702860320778');
        const dechannel = message.guild.channels.cache.get('842174857596895233');
        const ruchannel = message.guild.channels.cache.get('842163280637853736');
        const frchannel = message.guild.channels.cache.get('842582047460687873');
        if(query){


        const esdone = await translate(query, {to: 'es'});
        const esembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${esdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
        await eschannel.send(esembed)


        const brdone = await translate(query, {to: 'pt'});
        const brembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${brdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await brchannel.send(brembed)


        const dedone = await translate(query, {to: 'de'});
        const deembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${dedone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await dechannel.send(deembed)


        const rudone = await translate(query, {to: 'ru'});
        const ruembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${rudone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await ruchannel.send(ruembed)

        
        const frdone = await translate(query, {to: 'fr'});
        const frembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${frdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
    }
        
        if(messageAttachment) {
            await frchannel.send(messageAttachment)
            await ruchannel.send(messageAttachment)
            await dechannel.send(messageAttachment)
            await brchannel.send(messageAttachment)
            await eschannel.send(messageAttachment)
        }

    }
    //test
    if(message.channel.id === '844274686006263808') {
        let messageAttachment = message.attachments.size > 0 ? message.attachments.array()[0].url : null
        const args = message.content.split(/ +/);
        const query = args.join(" ");
        const eschannel = message.guild.channels.cache.get('844268890104004628');
        const brchannel = message.guild.channels.cache.get('844268890104004628');
        const dechannel = message.guild.channels.cache.get('844268890104004628');
        const ruchannel = message.guild.channels.cache.get('844268890104004628');
        const frchannel = message.guild.channels.cache.get('844268890104004628');
        if(query){


        const esdone = await translate(query, {to: 'es'});
        const esembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${esdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
        await eschannel.send(esembed)


        const brdone = await translate(query, {to: 'pt'});
        const brembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${brdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await brchannel.send(brembed)


        const dedone = await translate(query, {to: 'de'});
        const deembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${dedone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await dechannel.send(deembed)


        const rudone = await translate(query, {to: 'ru'});
        const ruembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${rudone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()

        await ruchannel.send(ruembed)

        
        const frdone = await translate(query, {to: 'fr'});
        const frembed = new Discord.MessageEmbed()
        .setTitle(message.channel.name)
        .setDescription(`${frdone.text}\n[Original message](${message.url})`)
        //.setAuthor(message.author.username)
        .setTimestamp()
    }
        
        if(messageAttachment) {
            await frchannel.send(messageAttachment)
            await ruchannel.send(messageAttachment)
            await dechannel.send(messageAttachment)
            await brchannel.send(messageAttachment)
            await eschannel.send(messageAttachment)
        }
        

    }

    
    


    if(!message.content.startsWith(prefix)) return;
    if(!message.guild) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const cmd = args.shift().toLowerCase();
    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)) {
        cooldowns.set(command.name, new Discord.Collection())
    }

    const current_time = Date.now()
    const time_stamps = cooldowns.get(command.name)
    const cooldown_amount = (command.cooldown) * 1000

    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            return message.reply(`Please wait ${time_left.toFixed(1)} more seconds before using ${prefix}${command.name}`);
        }
    }
    
    time_stamps.set(message.author.id, current_time);
    setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);
    
    try {
        command.execute(client, message, args, Discord, prefix);
    } catch (err) {
        message.reply("Cant execute command please try again later");
        console.log(err);
    }
}
