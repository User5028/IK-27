module.exports = {
    name: 'test',
    cooldown: 5,
    async execute(client, message, args, Discord) {
        let cwelcome = message.guild.channels.cache.find(c => c.name === 'pending' || c.name === 'lobby' || c.name === 'welcome' || c.name === 'welcome-goodbye')
        let role = message.guild.roles.cache.find(r => r.name === 'pending' || r.name === 'Pending')
        var verifiedrole = ["Member"]
        await cwelcome.createInvite({ maxAge: 0, maxUsers: 1, reason: 'Rejoin invite'})
        .then(i => message.reply(`invite ${i}`))
        .catch(console.error)
    }
}
