module.exports = async (Discord, client, reaction, user) => {
     const channel1 = await reaction.message.guild.channels.cache.find(c => c.name === 'lobby')
     //return;
     const b = reaction.emoji.name
     if(reaction.message.partial) await reaction.message.fetch()
     if(reaction.partial) await reaction.fetch()
     if(user.bot) return;
     if(!reaction.message.guild) return;

     const blue = reaction.message.guild.roles.cache.find(r => r.name === 'Ydvia');
     const red = reaction.message.guild.roles.cache.find(r => r.name === 'Rasian');
     const green = reaction.message.guild.roles.cache.find(r => r.name === 'Vitas');
     const Diplomat = reaction.message.guild.roles.cache.find(r => r.name === 'ServerGuest')
     const Guest = reaction.message.guild.roles.cache.find(r => r.name === 'ServerGuest')

     const one = '💙'
     const two = '❤'
     const three = '💚'
     const four = '💜'
     const five = '🤍'

     if(reaction.message.channel.id === channel1.id){
          if(b === one) {
               reaction.message.guild.members.cache.get(user.id).roles.remove(blue)
          }
          if(b === two) {
               reaction.message.guild.members.cache.get(user.id).roles.remove(red)
          }
          if(b === three) {
               reaction.message.guild.members.cache.get(user.id).roles.remove(green)
          }
          if(b === four) {
               reaction.message.guild.members.cache.get(user.id).roles.remove(Diplomat)
          }
          if(b === five) {
               reaction.message.guild.members.cache.get(user.id).roles.remove(Guest)
          }
     }
     //End Verification

 }
 