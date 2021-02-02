exports.run = (message, client, args) => {
    message.channel.send(`${message.author.username}#${message.author.discriminator}: ${args.join(" ")}`);
}