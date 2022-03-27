const Discord = require ("discord.js")
require("dotenv").config()

const TOKEN = "OTU3MjkyMTc2OTkwMTU0NzUz.Yj8p0A.9GOggTI8wjYmF0zZNXrQCdAuw6o"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"

    ]
})

client.on("ready", () => {
    console.log('Logged in as ${client.user.tag}')
})

client.on("messageCreate", (message) => {
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)