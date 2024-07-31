const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');


const accessEmbed = new EmbedBuilder()
	.setColor(0x0046FF)
	.setTitle('Clothes!')
	.setURL('https://vrchive.nomieze.com/clothes/')
	.setDescription('Clothes for different type of avatars!')
	.setThumbnail('https://booth.pximg.net/e6deeb51-72a5-4562-9425-0bdd110b534d/i/5832850/77ee8746-eadb-4a3d-937b-73c238f1fe9d_base_resized.jpg')
	.addFields({ name: 'Web name:', value: 'VRChive', inline: true })
	.setImage('https://bauwhmtbztaunmwfgaqi.supabase.co/storage/v1/object/public/asset-thumbnails/1634317926479/8e257237-829e-42ce-a857-32ffd8b9f087.webp')

module.exports = {
	data: new SlashCommandBuilder()
		.setName("clothes")
		.setDescription("Clothes for your avatar!"),

	async execute(interaction) {
		await interaction.reply({ embeds: [accessEmbed] })
	}
}