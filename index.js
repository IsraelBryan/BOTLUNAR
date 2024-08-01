//Ferramentas
const { Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({ intents: [GatewayIntentBits.Guilds] })
dotenv.config()
const { TOKEN } = process.env
const fs = require("node:fs");
const path = require("node:path");
const keep_alive = require("./keep_alive");
client.commands = new Collection()



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
    console.log(`Logado como ${c.user.tag}`)
})

client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()) {
        const selected = interaction.values[0]
        if (selected == "nardoragon") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=65b3c4a7ebf077debfd5d580 ")
        } else if (selected == "deira") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=64f43d663a29375dd846903e ")
        } else if (selected == "rindo") {
            await interaction.reply("Model: https://vrchive.nomieze.com/redirect/?downloadId=64f43d673a29375dd8469582 ")
        } else if (selected == "karin") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=64f43d673a29375dd84695db ")
        } else if (selected == "kikyo") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=64f43d673a29375dd846951c")
        } else if (selected == "chibi_novabeast") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=66917c84b844c675ff34ade8")
        } else if (selected == "mamehinata") {
            await interaction.reply("Model: na procura!!!")
        } else if (selected == "hyenid") {
            await interaction.reply("Model: https://workupload.com/archive/KApnaXv56z")
        } else if (selected == "rexouium") {
            await interaction.reply("Model: https://drive.google.com/file/d/1fZWjUp_Q-p_G2yREGx0FPwqC_2U5-sbU/view")
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