const {SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const { execute } = require('./clothes');

const prisma = new EmbedBuilder()
.setTitle("Prismic!")
.setDescription("Prismic's search avatar now WEB!!")
.setThumbnail("https://vrcpirate.com/vrcpirate/archive/pas/index.html")
.setColor(0x0046FF)
.setImage("https://vrcpirate.com/vrcpirate/archive/pas/index.html")
.addFields({ name: "Link", value: "https://vrcpirate.com/vrcpirate/archive/pas/index.html"})


module.exports = {
    data: new SlashCommandBuilder()
    .setName('prismic')
    .setDescription("Prismic's avatar search now WEB!!"),

    async execute(interaction) {
        await interaction.reply({ embed: [prisma] })
    }
}