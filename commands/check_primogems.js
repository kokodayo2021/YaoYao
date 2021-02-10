module.exports = {
    name: 'check_primogems',
    description: 'Check your amount of Primogems',
    usage: 'PREFIX + PRIMOGEMS',
    args: true,
    dmAllow: true,
    channels: [],
	execute(message, userData) {
        const sender = message.author;
    
        try {
            message.channel.send(`<@${sender.id}>\n${userData.primogems} <:A_primogem:775263793725964309>`);
        } catch (err) { console.log(err) }
	},
}