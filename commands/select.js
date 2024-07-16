const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js');

const select = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhum tópico selecionado")
            .addOptions({
                label: "nardoragon",
                description: "Veja todas as categorias associadas para Nardoragon.",
                value: "nardoragon"
            })
            .addOptions ({
                label: "wickerbeast",
                description: "Veja todas as categorias associadas para Wickerbeast",
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