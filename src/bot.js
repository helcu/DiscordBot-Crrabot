require('dotenv').config();

//console.log(process.env.DISCORDJS_BOT_TOKEN);

const {Client, MessageAttachment,MessageEmbed} = require('discord.js');
const client = new Client();
const PREFIX = "zz"

client.on('ready', () =>  {

console.log(client.user.username.toString())

});

client.on('message',(message)=>{

const messageCommand = message.content;

if(messageCommand.startsWith(PREFIX))
{
    const [CMD_NAME, ...args] =  messageCommand.trim().substring(PREFIX.length).split(/\s+/);

    switch (CMD_NAME) {
        case 'dogeprice':
            message.channel.send('Tu da mun!');
          break;
        case 'callacagada':
            message.reply('Vash ctmre');
          break;
          case 'test':
            const embed = new MessageEmbed()
      // Set the title of the field
      .setTitle('Crrano ctmre')
      // Set the color of the embed
      .setColor(0xff0000)
      // Set the main content of the embed
      .setDescription('Como se llama esta planteta!');
    // Send the embed to the same channel as the message
    message.channel.send(embed);
          break;
          case 'testcommand':
            var res = {comando: CMD_NAME, parametros: args.toString()}

            message.channel.send(JSON.stringify(res));
          break;
          case 'monachina':
            const attachment = new MessageAttachment('https://media.discordapp.net/attachments/321803801160056844/814395021113032744/1c2bcd4.jpg?width=283&height=534');

            message.channel.send(attachment);
          break;
        default:
            message.reply('Auxilio dame contexto');
          break;
      }

   
    
}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

