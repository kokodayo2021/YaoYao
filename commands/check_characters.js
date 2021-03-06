module.exports = {
    name: 'check_characters',
    description: 'Check your characters',
    usage: 'PREFIX + CHARACTERS',
    args: true,
    dmAllow: true,
    channels: [],
	execute(message, userData) {
        const sender = message.author;
        const { printCharacters } = require('../functions.js');

        try {
            message.channel.send(`<@${sender.id}>\n\n${printCharacters(userData.inventory.characters)}`);
        } catch (err) { console.log(err) }
	},
}