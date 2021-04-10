module.exports = {
    write: function (username, message) {
        const fs = require('fs')
        const json2csv = require('json2csv').parse
		const config = require('./config.json')
        const d = new Date();
        var date = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    
        var newLine = '\r\n';
    
        var fields = ['Date', 'Username', 'Message'];
    
        var data = [
            {
                Date: date,
                Username: username,
                Message: message
            }
        ];
    
        var options = {
            fields: fields,
            header: false,
        };
    
        fs.stat(`database/${config.gamemode}.csv`, function (err, stat) {
            if (err == null) {    
                var csv = json2csv(data, options) + newLine;
    
                fs.appendFile(`database/${config.gamemode}.csv`, csv, function (err) {
                    if (err)
                        throw err;
                    console.log(`Logged a new offence by ${username}! (${date})`);
                });
            } else {
                console.log('New file, just writing headers');
                fields = fields + newLine;
    
                fs.writeFile(`database/${config.gamemode}.csv`, fields, function (err) {
                    if (err)
                        throw err;
                    console.log('File saved');
                });
            }
        });
    }
};