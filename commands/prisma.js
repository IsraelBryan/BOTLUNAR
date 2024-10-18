const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const prisma = new EmbedBuilder()
    .setColor(0x0046FF)
    .setTitle("Prismic's Search")
    .setURL('https://vrcpirate.com/vrcpirate/archive/pas/index.html')
    .setDescription("Prismic's avatar search now WEB!")
    .setThumbnail('https://vrcpirate.com/vrcpirate/archive/pas/index.html')
    .addFields({ name: 'Link', value: 'https://vrcpirate.com/vrcpirate/archive/pas/index.html'})
    .setImage('https://vrcpirate.com/vrcpirate/archive/pas/index.html')

module.exports = {
    data: new SlashCommandBuilder()
        .setName("prisma")
        .setDescription("Prismic's avatar search now WEB!"),

    async execute(interaction) {
        await interaction.reply({ embeds: [prisma]})
    }
}