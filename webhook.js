module.exports = {
    hook: function (username, message) {
        const axios = require('axios')
        const config = require('./config.json')
		
		if (!config.webhook) return

        axios.post(config.webhook, {
            username: username,
            avatar_url: `https://mc-heads.net/avatar/${username.replace(' ', '')}`,
            content: message
        })
    }
}