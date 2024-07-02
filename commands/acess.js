const {SlashCommandBuilder, EmbedBuilder, MessageEmbed} = require('discord.js');


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
		const accessEmbed = new EmbedBuilder()
		.setColor(0x0099FF)
		.setTitle('Collar-Wicker')
		.setURL('https://discord.js.org/')
		.setDescription('Some description here')
		.setThumbnail('https://i.imgur.com/AfFp7pu.png')
		.addFields({ name: 'Inline field title', value: 'Some value here', inline: true })
		.setImage('https://i.imgur.com/AfFp7pu.png')
		.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

			//Embed inicial
			const InitialEmbed = await interaction.reply({embeds : [accessEmbed]})

			//Adicionando reações
			await InitialEmbed.react('⬅️');
			await InitialEmbed.react('➡️');

			//Filtro das reações
			const filter = (reaction, user) => {
				return ['⬅️', '➡️'].includes(reaction.emoji.name) && user.id === interaction.user.id;
			}

			//Coletor
			const collector =InitialEmbed.createReactionCollector({ filter, time: 60000});

			collector.on('collect', async (reaction) => {
				if(reaction.emoji.name === '⬅️'){
					accessEmbed.setDescription('Old');
					await InitialEmbed.edit({embeds : [accessEmbed] });

				} else if(reaction.emoji.name === '➡️'){
					accessEmbed.setDescription('New');
					await InitialEmbed.edit({embeds : [accessEmbed] });
				}
			});

			collector.on('end', collected => {
				console.log(`Foram coletados ${collected.size} reações.`)
			});
    }
}