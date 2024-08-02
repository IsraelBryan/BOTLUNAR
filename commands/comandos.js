const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const commandsEmbed = new EmbedBuilder()
	.setColor(0xea00db)
	.setTitle('Comandos!')
	.addFields(
		{ name: 'Clothes', value: 'Link que leva a uma lista de roupas para diversos tipos de avatares!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Select', value: 'Lhe disponibiliza escolhas para diversos tipos de downloads de avatares! Lembrando que terá que fazer uma conta no devido site para baixar.', inline: true },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Unity', value: 'Lhe oferece os arquivos para baixar a unity!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Playlist-oficial', value: 'Ouça as músicas recomendadas pelo bot em sua playlist oficial!' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Atualização', value: 'Lhe dar informações atualizadas sobre respectivos sites destinados nas listas!' },
	)


module.exports = {
    data: new SlashCommandBuilder()
        .setName("commands")
        .setDescription("Lista de comandos para lhe manter informado!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [commandsEmbed] })
    }
}