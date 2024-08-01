const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const select = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhum tópico selecionado")
            .addOptions({
                label: "nardoragon",
                description: "Nardoragon model download",
                value: "nardoragon"
            })
            .addOptions({
                label: "wickerbeast",
                description: "Wickerbeast model download",
                value: "wickerbeast"
            })
            .addOptions({
                label: "deira",
                description:"Deira model download",
                value: "deira"
            })
            .addOptions({                       
                label: "rindo",
                description: "Rindo model download",
                value: "rindo"
            })
            .addOptions({
                label: "karin",
                description: "Karin model download",
                value: "karin"
            })
            .addOptions({
                label: "kikyo",
                description:"Kikyo model download",
                value: "kikyo"
            })
            .addOptions({
                label: "chibi_novabeast",
                description: "Chibi Novabeast model download",
                value: "chibi_novabeast"
            })
            .addOptions({
                label: "mamehinata",
                description: "Mamehinata V1.53 model download",
                value: "mamehinata"
            })
            .addOptions({
                label: "hyenid",
                description: "Hyenid V1.16 model download",
                value: "hyenid"
            })
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("select")
        .setDescription("selecione categorias para seu avatar"),

    async execute(interaction) {
        await interaction.reply({ contents: "Selecione uma dessas categorias: ", components: [select] })
    }
}