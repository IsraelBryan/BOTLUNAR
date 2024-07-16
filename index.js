//Ferramentas
const {Client, Events, GatewayIntentBits, Collection } = require('discord.js');
const dotenv = require('dotenv');
const client = new Client({intents: [GatewayIntentBits.Guilds] })
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
        console.log(`Isso aqui ${filePath} esta com "data" ou "execute" bombadinhuh`)
    }
}

client.once(Events.ClientReady, c => {
    console.log(`Logado como ${c.user.tag}`)
})

client.login(TOKEN);

client.on(Events.InteractionCreate, async interaction => {
    if (interaction.isStringSelectMenu()){
        const selected = interaction.values[0]
        if (selected == "nardoragon"){
            await interaction.reply("Download Model: https://c4.kemono.su/data/de/9a/de9accc75ba099078e73d6214f081e86c95388bd319b13c63376ce757671b0b0.gz?f=5%20Fingers%20PC%20V2.1.unitypackage ")
        }
    }
    if(!interaction.isChatInputCommand()) return
    const command = interaction.client.commands.get(interaction.commandName)
    if(!command){
        console.error("Comandinho não foi achado eiiin~")
        return
    }
    try {
        await command.execute(interaction)
    } catch (error){
        console.error(error)
        await interaction.reply("Houve um errinho da nossa parte~ (vulgo UMB)")
    }
      
})