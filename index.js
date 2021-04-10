const mineflayer = require('mineflayer')
const writer = require('./writer.js')
const webhook = require('./webhook.js')
const filter = require('./filter.js')
const config = require('./config.json')
const fs = require('fs')
const express = require('express')
const app = express()

app.use(express.static('website/static'));

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/website/index.html');
});

app.get('/data/:file', function(request, response) {
  var file = request.params.file;
  response.sendFile(__dirname + '/database/' + file);
});

const listener = app.listen(6000, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});

const options = {
  host: 'play.luckynetwork.net',
  port: 25565,
  username: config.username 
}

const join = () => {
  console.log('Joined the server!')
  setTimeout(() => {
    bot.chat('/l ' + config.password) 
    setTimeout(() => {
      console.log('Logged in!')
      bot.chat('/' + config.gamemode) 
      console.log(`Going to ${config.gamemode}!`)
	  webhook.hook('Spyglass Information', `**New instance in ${config.gamemode}!**`)
    }, 1000)
  }, 1000)
}

const bot = mineflayer.createBot(options)

bot.once('spawn', join)

bot.on('chat', (username, message) => {
  const profanity = JSON.parse(fs.readFileSync("./profanity.json"))
  
  let flag = false;
  
  filter.user(username, message)
  
  message = filter.translate(message)
  splitmessage = message.split(" ")
		
  for (var m in splitmessage) {
    for (var i in profanity) {
	    if (splitmessage[m].toLowerCase() === profanity[i].toLowerCase()) flag = true
    }
  }

  if (flag) {
    writer.write(username, message)
    webhook.hook(username, message)
  }
})

const repeatM = setInterval(function(){
	bot.chat("/" + config.gamemode)
}, 60000)