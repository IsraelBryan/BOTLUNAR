const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const exampleEmbed = new EmbedBuilder()
	.setColor(0xea80db)
	.setTitle('Atualizações!')
	.addFields(
		{ name: 'STEAM', value: 'https://store.steampowered.com/updated/all/?l=portuguese' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'VRCHAT', value: 'https://docs.vrchat.com/docs/latest-release', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'VRModels', value: 'https://vrmodels.store/ [FREE]' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'BOOTH', value: 'https://booth.pm/ja/search/VRChat [PAID]' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'VRCArena', value: 'https://www.vrcarena.com [PAID/FREE]' },
	)


module.exports = {
	data: new SlashCommandBuilder()
		.setName("atualizações")
		.setDescription("Demonstra atualizações de plataformas"),

	async execute(interaction) {
		await interaction.reply({ embeds: [exampleEmbed] })
	}
}