//Ferramentas
const { Client, Events, GatewayIntentBits, Collection, Guild, GuildMember } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
dotenv.config()
const { TOKEN } = process.env
const fs = require("node:fs");
const path = require("node:path");
const keep_alive = require("./keep_alive");
const config = require("./config.json");
client.commands = new Collection()
const { VRChat, Enums } = require('vrchat-api-library');




//Importações
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

client.once(Events.ClientReady, c => {
    console.log(`Logado como ${c.user.tag}}`)
    console.log(`O bot entrou nos servidores: ${Guild.name}, (id: ${Guild.id}), com uma população de ${Guild.member}}`)
})


client.login(TOKEN);
client.login(config.token);

//Inserindo as seleções
client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]
        if (selected == "nardoragon") {
            await interaction.reply("Model:  ")
        } else if (selected == "deira") {
            await interaction.reply("Model:  ")
        } else if (selected == "rindo") {
            await interaction.reply("Model:  ")
        } else if (selected == "karin") {
            await interaction.reply("Model:  ")
        } else if (selected == "kikyo") {
            await interaction.reply("Model: ")
        } else if (selected == "chibi_novabeast") {
            await interaction.reply("Model: ")
        } else if (selected == "mamehinata") {
            await interaction.reply("Model: empty!!!")
        } else if (selected == "hyenid") {
            await interaction.reply("Model: ")
        } else if (selected == "rexouium") {
            await interaction.reply("Model: ")
        } else if (selected == "kuuta") {
            await interaction.reply("Model: ")
        } else if (selected == "vyllith") {
            await interaction.reply("Model:")
        } else if (selected == "wickerbeast") {
            await interaction.reply("Model: ")
        } else if (selected == "deira_neo"){
            await interaction.reply("Model: ")
        } else if (selected == "povichi"){
            await interaction.reply("Model: ")
        }
    }
    if (!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if (!command) {
        console.error("Comandinho não foi achado eiiin")
        return
    }
    try {
        await command.execute(interaction)
    } catch (error) {
        console.error(error)
        await interaction.reply("Houve um errinho da nossa parte (vulgo UMB)")
    }

})