module.exports = {
    name: 'check_pulls',
    description: 'Check the number of Pulls you can make',
    usage: 'PREFIX + pulls',
    args: true,
    dmAllow: true,
    channels: [],
	execute(message, userData) {
        const sender = message.author;
    
        try {
            message.channel.send(`<@${sender.id}>\n${Math.floor(userData.primogems/160)} <:A_primogem:775263793725964309>`);
        } catch (err) { console.log(err) }
	},
}