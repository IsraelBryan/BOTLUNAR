const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const modelsEmbed = new EmbedBuilder()
	.setColor(0xea20db)
	.setTitle('Free Models!')
	.addFields(
		{ name: 'Nardoragon [CUIDADO, SITE 18+]', value: 'https://c4.kemono.su/data/de/9a/de9accc75ba099078e73d6214f081e86c95388bd319b13c63376ce757671b0b0.gz?f=5%20Fingers%20PC%20V2.1.unitypackage' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Wickerbeast', value: 'https://vrmodels.store/avatars/39341-kurais-female-wickerbeast-avatar.html', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Deira', value: 'https://vrmodels.store/avatars/34865-star-pup-deira-edit.html'},
	)

 
module.exports = {
    data: new SlashCommandBuilder()
    .setName("models-gt")
    .setDescription("modelos de avatares do vrchat gratuitos! [VRModels]"),

    async execute(interaction) {
        await interaction.reply({embeds: [modelsEmbed]})
    }
}