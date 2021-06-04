module.exports = async (Discord, client, member) => {
    let cwelcome = member.guild.channels.cache.find(c => c.name === 'pending' || c.name === 'lobby' || c.name === 'welcome' || c.name === 'welcome-goodbye')
    let role = member.guild.roles.cache.find(r => r.name === 'pending' || r.name === 'Pending')
    
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


}