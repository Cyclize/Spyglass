module.exports = {
	user: function (username, message) {
		const config = require('./config.json')
		
		if (username === 'AFK') return;
		if (username === config.username) console.log('Someone messaged: ' + message)
			
		return message
	},
	translate: function (message) {
		message = message.replace(/0/gi, 'o')
		message = message.replace(/3/gi, 'e')
		message = message.replace(/@/gi, 'a')
		message = message.replace(/4/gi, 'a')
		message = message.replace(/6/gi, 'g')
		message = message.replace(/1/gi, 'i')
		message = message.replace(/!/gi, 'i')
		
		return message
	}
}