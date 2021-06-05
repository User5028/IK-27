let cachedUserRoles = {};
module.exports = {
    name: 'mute',
    aliases: ['silence'],
    description: 'Mutes  a member',
    cooldown: 5,
    async execute(client, message, args, Discord) {
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send("You do not have permission to use this command").then(msg => msg.delete({timeout: 60000}));
        if(!args[0]) return message.channel.send(`You have not given me a user to mute please provide me with someone`).then(msg => msg.delete({timeout: 60000}));
        if(!args[1]) return message.channel.send(`You have not given me a timeframe for the mute`).then(msg => msg.delete({timeout: 60000}));
        if(!args[2]) return message.channel.send(`You have not provided a reason for the mute`)

        let muterole = message.guild.roles.cache.find(role => role.name == "muted" || role.name === 'Restricted access');
        if(!muterole) return message.channel.send(`Mute role does not exist`).then(msg => msg.delete({timeout: 60000}));

        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]))
        if(!person) return message.channel.send(`User Doesn't Exist`).then(msg => msg.delete({timeout: 60000}));
        cachedUserRoles[person.id] = person.roles.cache;
        person.roles.set([]).then(member => member.roles.add(muterole)).catch(console.error);

        let reason = args.splice(2).join(' ');
        console.log(reason)


        const embed = new Discord.MessageEmbed()
        .setTitle(`@${person.user.tag} has been muted`)
        .setDescription(`They have been muted for ${args[1]} minute\n\nWith the reason: **${reason}**`)
        .setTimestamp()
        message.channel.send(embed)

        setTimeout(async () => {
            await person.roles.set(cachedUserRoles[person.id]).catch(console.error)
            await person.roles.remove(muterole)
        }, args[1] * 1000 * 60)
    }
}
