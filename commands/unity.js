            const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const modelsEmbed = new EmbedBuilder()
    .setColor(0xea20db)
    .setTitle('Unity')
    .setThumbnail('https://cdn.domestika.org/c_fill,dpr_auto,f_auto,q_auto,w_1200/v1635855213/blog-post-open-graph-covers/000/005/309/5309-original.jpg?1635855213')
    .setImage('https://upload.wikimedia.org/wikipedia/commons/c/c4/Unity_2021.svg')
    .addFields(
        { name: 'Unity Hub', value: 'https://unity.com/pt/download' },
        { name: '\u200B', value: '\u200B' },
        { name: 'Unity 2022.3.22f1', value: 'https://unity.com/pt/releases/editor/whats-new/2022.3.22#installs', inline: true },
        { name: '\u200B', value: '\u200B' },
        { name: 'Unity 2019.4.31', value: 'https://unity.com/pt/releases/editor/whats-new/2019.4.31#installs' },
    )


module.exports = {
    data: new SlashCommandBuilder()
        .setName("unity")
        .setDescription("Unity downloads!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [modelsEmbed] })
    }
}