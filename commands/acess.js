const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');


const accessEmbed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Collar-Wicker')
	.setURL('https://discord.js.org/')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

module.exports = {
    data: new SlashCommandBuilder()
    .setName("collar")
    .setDescription("custom collars to your avatar!"),

    async execute(interaction) {
        await interaction.reply({embeds: [accessEmbed]})
		await InitialMessage.reply('⬅️')
		await  InitialMessage.reply('⬅️')
    }
}