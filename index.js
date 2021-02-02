const Discord = require("discord.js"),
  client = new Discord.Client(),
  path = require("path"),
  fs = require("fs"),
  settings = require("./settings.json");

var  commandList = [];

client.on("ready", () => {
  console.log("Started Bot!");

  const directoryPath = path.join(__dirname, "commands");
  fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
      console.log("Unable to scan directory: " + err);
      return process.exit();
    }
    //listing all files using forEach
    files.forEach(function (file) {
      var stats = fs.statSync(`./commands/${file.toString()}`);

      if (!stats.isDirectory()) {
        commandList.push(file.toString().slice(0, -3));
      }
    });
    console.log(`${commandList.length} commands registerd!`);
  });
});

client.on("message", (message) => {
  if (message.author.bot) return true;
  if (message.channel.type === 'dm'){
    if (!message.content.startsWith(config.prefix)){
      client.users.cache.get(config.ownerID).send(`${message.author.id}, ${message.author.username}#${message.author.discriminator}: ${message.content}`);
    } else{
      return;
    }
  }
  else if (message.content.startsWith(settings.prefix)) {
    var command = message.content.split(settings.prefix)[1].toLowerCase().split(" ")[0];
    var args = message.content.split(settings.prefix)[1].toLowerCase().split(" ");
    args.shift();
    if (commandList.includes(command)) {
      require(`./commands/${command}.js`).run(message, client, args, settings);
    } else {
      return "COMMAND_NOT_FOUND";
    }
  }
});

client.login(settings.token);