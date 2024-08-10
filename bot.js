const { Client, GatewayIntentBits } = require('discord.js'); //import discord.js

// Create new client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ]
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});





// If image posted in #💧drip-or-drown💀 channel, react with 💧💀
client.on('messageCreate', message => {
    if (message.channel.name === '💧drip-or-drown💀' && message.attachments.size > 0) {
        message.attachments.forEach(attachment => {
            if (attachIsImage(attachment)) {
                message.react('💧');
                message.react('💀');
            }
        })
    }
});


// Function which returns true if attachment is an image
function attachIsImage(msgAttach) {
    return msgAttach.contentType.includes('image')
}





// Login bot using token
client.login(process.env.CLIENT_TOKEN);
