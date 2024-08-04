const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");

const commandsEmbed = new EmbedBuilder()
    .setColor(0xea190db)
    .setTitle("Commands!")
    .addFields(
        { name: 'Clothes', value: 'Lot of clothes for different types of avatars!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Unity', value: 'Unity archive to download and create your own avatar!'},
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Select', value: 'Select models of avatars to download!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Playlist-Oficial', value: "Who don't love one music right?" },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Atualização', value: 'Links with popular websites for you stay updated with news!' },
    )

    module.exports = {
        data: new SlashCommandBuilder()
		.setName("commands")
		.setDescription("Show the commands"),

	        async execute(interaction) {
		await interaction.reply({ embeds: [commandsEmbed] })
	}
}