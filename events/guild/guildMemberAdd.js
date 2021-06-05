module.exports = async (Discord, client, member) => {
    let cwelcome = member.guild.channels.cache.find(c => c.name === 'pending' || c.name === 'lobby' || c.name === 'welcome' || c.name === 'welcome-goodbye')
    let role = member.guild.roles.cache.find(r => r.name === 'pending' || r.name === 'Pending')
    var verifiedrole = ["Member", 'member', 'verified', 'Verified']
    let invite = cwelcome.createInvite({ maxAge: 0, maxUsers: 0})

    
    if(cwelcome) {
        const embed = new Discord.MessageEmbed()
        .setTitle("Member Joined")
        .setDescription(`${member} has joined ${member.guild.name}`)
        .setTimestamp()
    
        cwelcome.send(embed)
    }

    if(role) {
        member.roles.add(role)
    }

    setTimeout(async () => {
        if(!member.roles.cache.find(r => verifiedrole.includes(r.name))) {
            await cwelcome.createInvite({ maxAge: 0, maxUsers: 0, reason: 'Rejoin invite'})
            .then(async i => {
                const embed = new Discord.MessageEmbed().setDescription(`You have been kicked from **${member.guild.name}** please join back and verify your self\n[Rejoin here](${i})`).setTimestamp()
                await member.send(embed)
                await member.kick('Auto kick from not verifying in the server');
            })
            .catch(console.error)
        }
    }, 259200 * 1000);
}




