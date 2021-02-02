# DiscordBotTemplate

A useable beginer-friendly code template for discord bots!

# Installation

### Step 1. Clone the repo
Clone this git repo into the desired folder
```git clone https://github.com/TheJYT/DiscordBotTemplate.git```

### Step 2. 
Install the required dependacies
```npm i```

### Step 3.
Edit the config.json file and input your details.

### Step 4.
And your done! you can run your bot by using:
```npm run start```
OR 
if you are busy testing yout bot:
```npm run dev```

# FAQ

### Where can I find my discord bot token?
Take a look at (WriteBot's page)[https://www.writebots.com/discord-bot-token/] about creating and finind you discord bot token.

### Where can I find my discord ID?
Take a look at (Discord's Page)[https://support.discord.com/hc/en-us/articles/206346498-Where-can-I-find-my-User-Server-Message-ID-] about finding the different types of ID's 

### How can i create new commands?
Thats simple! Create a new file in the commands folder, and copy and paste the contents of the command.template file into it. OR copy it from here
```js
exports.run = (message, client, args) => {
    // Run Command
}
```
You can remove the "// Run Command" comment as it is not needed. Then just write your code for the command in there!
