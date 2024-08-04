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

//VRCHAT
const { stdin, stdout } = require('process');
const readline = require('readline');
const vrchat_user = 'UMBFB'
const vrchat_pass = 'umbreon_game23'
const channel_id = '1007850093703069736'
const vrchat = new VRChat();

// Promise based console input function.
// Any promise-based input will work assuming it returns the two-factor authentication code.
function Prompt(query) {
    const question = readline.createInterface({
        input: stdin,
        output: stdout,
    });

    return new Promise(resolve => question.question(query, res => {
        question.close();
        resolve(res);
    }));
}

// Main asynchronous method.
const asyncMethod = async () => {
    const auth = await vrchat.Authenticate({
        username: "UMBFB",
        password: "umbreon_game23",
        authCookie: "",
        twoFactorAuth: ""
    }, async (type) => {
        return await Prompt(`Please input ${type} two factor code:\n`);
    });

    console.log(auth); // Logs authentication information as a JSON object to console.

    // Method ignoring errors.
    const friendsArray = await vrchat.FriendsApi.ListFriends({ n: 100, offline: true }); // Get an Array of LimitedUser objects as documented on the Community-driven API Docs.
    for (let i = 0; i < friendsArray.length; i++) {
        console.log(friendsArray[i].displayName); // Log display names of all offline friends to console returned from the API function call above.
    }

    // Method catching & handling errors. (I recommend catching & handling your errors, otherwise you could run into catastrophic errors that break your applications at runtime)
    // Get an Array of LimitedUser objects as documented on the Community-driven API Docs and only log names if there was no error, otherwise log the error.
    await vrchat.FriendsApi.ListFriends({ n: 100, offline: true }).then(res => {
        for (let i = 0; i < res.length; i++) {
            console.log(res[i].displayName); // Log display names of all offline friends to console returned from the API function call above.
        }
    }).catch(err => console.log(err));

    // Basic EventsApi usage, making use of the VRChat class.
    vrchat.EventsApi.Connect();

    // Usage of custom undocumented event type, this isn't valid, just for demonstration purposes.
    // Upon getting an undocumented event type, the library will warn you in the console and ask you to report it. (Please do this!!)
    vrchat.EventsApi.on("undocumented event", (data) => {
        console.log("Undocumented Event");
        console.log(data);
    });

    vrchat.EventsApi.on(Enums.EventType.error, (err) => {
        console.log("Error: " + err.message);
    });

    vrchat.EventsApi.on(Enums.EventType.userOnline, (data) => {
        console.log("User online");
        console.log(data);
    });

    vrchat.EventsApi.on(Enums.EventType.userOffline, (data) => {
        console.log("User offline");
        console.log(data);
    });

    // vrchat.EventsApi.Disconnect(); -- Optionally disconnect from the API
}

asyncMethod(); // run asynchronous code from a synchronous context.

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
            await interaction.reply("Model: empty!!!")
        } else if (selected == "hyenid") {
            await interaction.reply("Model: https://workupload.com/archive/KApnaXv56z")
        } else if (selected == "rexouium") {
            await interaction.reply("Model: https://drive.google.com/file/d/1fZWjUp_Q-p_G2yREGx0FPwqC_2U5-sbU/view")
        } else if (selected == "kuuta") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=666b689d0a3ae09105656570")
        } else if (selected == "vyllith") {
            await interaction.reply("Model: https://vrchive.nomieze.com/item/?assetId=6669dd3d92a88ea3dca06b4d")
        } else if (selected == "wickerbeast") {
            await interaction.reply("Model: https://drive.google.com/file/d/1WJ6Gp1kkrMkSjJCWzIML1TZ1jJKu_tFO/view")
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