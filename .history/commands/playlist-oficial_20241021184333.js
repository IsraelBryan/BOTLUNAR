const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const vrp = new EmbedBuilder()
    .setTitle("VRCPirate")
    .setDescription("VRCPirate, DB for avatars!")
    .setThumbnail("https://vrcpirate.com/vrcpirate/db.html")
    .addFields({name: "Link", value: "https://vrcpirate.com/"})

module.exports = {
    data: new SlashCommandBuilder()
        .setName("vrp")
        .setDescription("VRCPirate!!!!"),

    async execute(interaction) {
        await interaction.reply( {
            
        })
    }
}