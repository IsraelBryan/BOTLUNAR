const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const vrp = new Embed

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist-oficial")
        .setDescription("A playlist Oficial do BOT!"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/1s2MBnl4Ugl1Qj963bsXZW?si=V06WekjqT3if5aHEPYu-GA")
    }
}