const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');

const fursuits = new EmbedBuilder()
.setColor(0xFFFFF)
    .setTitle("Fursuits!")
    .setDescription("Fursuit prices in different websites!📦")
    .setThumbnail("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO4nbUWui6lGSCPPFJ3cZa3DoCT8tOIo-cTQ&s")
    .setImage('https://s.alicdn.com/@sc04/kf/Hed3cd61ca48f4acc99bf4fbfc35984ccU.jpg_720x720q50.jpg')
    .addFields({name: "AliExpress", value: "╰┈➤https://pt.aliexpress.com/w/wholesale-fursuit.html"})
    .addFields({name: 'Amazon', value: '╰┈➤https://www.amazon.com.br/fursuit/s?k=fursuit'})
    .addFields({name: 'Mercado Livre', value: '╰┈➤https://lista.mercadolivre.com.br/fursuit'})
    .addFields({name:'Alibaba', value:'╰┈➤https://www.alibaba.com/trade/search?spm=a2700.7735675.the-new-header_fy23_pc_search_bar.keydown__Enter&tab=all&SearchText=fursuit'})
    

module.exports = {
    data: new SlashCommandBuilder()
        .setName("fursuits")
        .setDescription("Fursuits and prices!"),

    async execute(interaction) {
        await interaction.reply( {
            embeds: [fursuits]
        })
    }
}