const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const eventsEmbed = new EmbedBuilder()
	.setColor(0x00000)
	.setTitle('Events!')
	.setURL('https://brasilfurfest.com.br/')
	.setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9lCAyXfZyy-eQE2H_lTy7y1HEGe8zmQhbA&s')
	.setImage('https://i.ytimg.com/vi/7lFGEtaQj_k/hqdefault.jpg')
	.setDescription('Those are the Events of the moment!')
	.addFields({ name: '1# Brasil FurFest', value: 'https://brasilfurfest.com.br/', inline: true })
	.addFields({name: '2# FurSMeet', value: 'https://fursmeet.wixsite.com/fursmeet', inline: true})
	.addFields({name: '3# Furboliche', value: 'https://brasilfurfest.com.br/furboliche/'})

module.exports = {
	data: new SlashCommandBuilder()
		.setName("events")
		.setDescription("Top Events of the moment!"),

	async execute(interaction) {
		await interaction.reply({ embeds: [eventsEmbed] })
	}
}