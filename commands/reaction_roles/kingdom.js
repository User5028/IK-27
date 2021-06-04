module.exports = {
    name: 'kingdom',
    description: 'Add reaction roles so that people can assign them the roles they need',
    cooldown: 120,
    async execute(client, message, args, Discord) {
        message.delete()

        const channel = message.guild.channels.cache.find(c => c.name === 'self-roles')

        const one = '💙'
        const two = '❤'
        const three = '💚'
        const four = '💜'
        const five = '🤍'


        const embed = new Discord.MessageEmbed()
        .setColor('008080')
        .setTitle('Kingdom Roles')
        .setDescription(`:flag_ru: Из какого вы королевства? Пожалуйста кликните на реакцию
        :flag_es: Cual es tu reino (Faccion)? Pincha la reaccion de tu color en este mensaje por favor.
        :flag_fr: Quel est votre royaume (faction)? Cliquez sur la réaction à ce message s'il vous plaît.
        :flag_pt: :flag_br:  Qual é o seu reino (facção)? Clique na reação a esta mensagem, por favor.
        :flag_de: Was ist dein Königreich (Fraktion)? Klicken Sie bitte auf die Reaktion auf diese Nachricht.\n
        💙 - Ydvia\n
        ❤ - Rasian\n
        💚 - Vitas\n
        💜 - Server Diplomat\n
        🤍 - Guest\n`)



        let msgsent = await channel.send(embed) 
        
        await msgsent.react(one)
        await msgsent.react(two)
        await msgsent.react(three)
        await msgsent.react(four)
        await msgsent.react(five)

    }
}