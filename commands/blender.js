const {SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { execute } = require('./unity');

const blenderEmbed = new EmbedBuilder()
    .setTitle('Blender Download!')
    .setColor(0xFFFFF)
    .setDescription('Want to make 3D Furry Models? We recommend Blender!')
    .setImage('https://cdn.statically.io/img/qualificad.com.br/wp-content/uploads/2024/03/blender-interface-16-1024x549.png?quality=100&f=auto')
    .setThumbnail('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNUo7Du0AiYeNKcBocbWzvDluUYkt6ABMSg&s')
    .setFields(
        {name: 'Blender', value:'https://www.blender.org/download/'}
    )


    module.exports = {
        data: new SlashCommandBuilder()
        .setName('blender')
        .setDescription('Blender download!'),

        async execute(interaction){
            await interaction.reply({embeds: [blenderEmbed]})
        }
    }