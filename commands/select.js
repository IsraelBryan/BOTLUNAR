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
            .addOptions ({
                label: "wickerbeast",
                description: "Wickerbeast model download",
                value: "wickerbeast"
            })
    )

    module.exports = {
        data: new SlashCommandBuilder()
        .setName("select")
        .setDescription("selecione categorias!"),
    
        async execute(interaction) {
            await interaction.reply({contents: "Selecione uma dessas categorias: ", components: [select]})
        }
    }