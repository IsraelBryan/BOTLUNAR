const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const accessEmbed = new EmbedBuilder()
	.setColor(0x0046FF)
	.setTitle('Clothes!')
	.setURL('https://vrchive.nomieze.com/clothes/')
	.setDescription('Clothes for different type of avatars!')
	.setThumbnail('https://booth.pximg.net/e6deeb51-72a5-4562-9425-0bdd110b534d/i/5832850/77ee8746-eadb-4a3d-937b-73c238f1fe9d_base_resized.jpg')
	.addFields({ name: 'Web name:', value: 'VRChive', inline: true })
	.setImage('https://booth.pximg.net/1832527b-fd7e-4ad1-b31d-b883f1c6bcfb/i/5393738/48939daa-4f4f-4486-bc2e-79ee0772ce09_base_resized.jpg')
	.setFooter('Website: VRChive')

module.exports = {
	data: new SlashCommandBuilder()
		.setName("clothes")
		.setDescription("Clothes for your avatar!"),

	async execute(interaction) {
		await interaction.reply({ embeds: [accessEmbed] })
	}
}