module.exports = async (Discord, client, oldmember, newmember) => {
    let pending = newmember.guild.roles.cache.find(r => r.name === 'pending' || r.name === 'Pending')
    let member = newmember.guild.roles.cache.find(r => r.name === 'member' || r.name === 'Member')
    if(newmember.roles.cache.find(r => r.name === 'Ydvia' || r.name === 'Rasian' || r.name === 'Vitas')) {
        try {
            newmember.roles.remove(pending)
            newmember.roles.add(member)
        } catch {
            return;
        }

    }
}