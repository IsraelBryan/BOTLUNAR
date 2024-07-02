const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');


const accessEmbed = new EmbedBuilder()
	.setColor(0x0046FF)
	.setTitle('Wickerbeast accessories')
	.setURL('https://www.vrcarena.com/accessorize/ICd2dre4zzhIyaHR7PZx')
	.setDescription('Wickerbeast accessories PAID/FREE')
	.setThumbnail('https://bauwhmtbztaunmwfgaqi.supabase.co/storage/v1/object/public/asset-thumbnails/1634317926479/8e257237-829e-42ce-a857-32ffd8b9f087.webp')
	.addFields({ name: 'Prices:', value: '10 USD to 35 USD or more.', inline: true })
	.setImage('https://bauwhmtbztaunmwfgaqi.supabase.co/storage/v1/object/public/asset-thumbnails/1634317926479/8e257237-829e-42ce-a857-32ffd8b9f087.webp')

module.exports = {
    data: new SlashCommandBuilder()
    .setName("wickerbeast-access")
    .setDescription("wickerbeast accessories"),

    async execute(interaction) {
        await interaction.reply({embeds: [accessEmbed]})
    }
}