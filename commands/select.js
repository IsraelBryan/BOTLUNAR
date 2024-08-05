const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const select = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Click here to select one model to download!")
            .addOptions({
                label: "nardoragon",
                description: "Nardoragon model download",
                value: "nardoragon"
            })
            .addOptions({
                label: "wickerbeast",
                description: "Wickerbeast Google Drive download",
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
            .addOptions({
                label: "rexouium",
                description: "Rexouium Google Drive model download",
                value: "rexouium"
            })
            .addOptions({
                label: "Kuuta",
                description: "Kuuta V1.00 download",
                value: "kuuta"
            })
            .addOptions({
                label: "vyllith",
                description: "Vyllith model download",
                value: "vyllith"
            })
            .addOptions({
                label: "deira_neo",
                description: "Deira Neo model download",
                value: "deira_neo"
            })
            .addOptions({
                label: "povichi",
                description: "Povichi V2 model download",
                value: "povichi"
            })
    )

module.exports = {
    data: new SlashCommandBuilder()
        .setName("select")
        .setDescription("select models of avatars to download!"),

    async execute(interaction) {
        await interaction.reply({ contents: "Selecione uma dessas categorias: ", components: [select] })
    }
}