//Ferramentas
const { Client, Events, GatewayIntentBits, Collection, Guild, GuildMember, GuildNSFWLevel } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
dotenv.config()
const { TOKEN } = process.env
const fs = require("node:fs");
const path = require("node:path");
const keep_alive = require("./keep_alive");
const config = require("../config.json");
client.commands = new Collection()
const { GUILD_ID } = process.env;
const deploy_commands = require('./deploy-commands');



const commandsPath = path.join(__dirname, "commands")
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith(".js"))
console.log(commandFiles)

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file)
    const command = require(filePath)

    if ("data" in command && "execute" in command) {
        client.commands.set(command.data.name, command)
    } else {
        console.log(`Isso aqui ${filePath} esta com "data" ou "execute" bombado`)
    }
}

client.login(TOKEN);
client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Command not found")
        return
    }
    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply("Had a problem of our program, sorry!")
    }

})