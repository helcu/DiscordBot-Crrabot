require('dotenv').config();

//console.log(process.env.DISCORDJS_BOT_TOKEN);
let price = require('crypto-price')

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
        case 'precio':

            
            price.getCryptoPrice('USD', args[0].toUpperCase()).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
                console.log(obj)
                //message.channel.send(JSON.stringify(obj.price));


                const embed = new MessageEmbed()
                // Set the title of the field
                .setTitle('CryptoCrrano el precio del ' +args[0].toUpperCase() + ' es:' )
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription('Precio: ' + obj.price + ' USD' + '\n' + 'Volumen: ' + obj.volume + '\n' + 'Cambio: ' + obj.change );
                
                message.channel.send(embed);

            }).catch(err => {
                const embed = new MessageEmbed()
                // Set the title of the field
                .setTitle('Crrano Gil!' )
                // Set the color of the embed
                .setColor(0xff0000)
                // Set the main content of the embed
                .setDescription('La crypto ' + args[0] + 'no existe webonaso');
                
                message.channel.send(embed);
                console.log(err)
            })

            
          break;
        case 'callacagada':
            message.reply('Vash ctmre');
          break;
          case 'version':
            message.reply('Crrabot version v0.1. Hay talento, falto apoyo!' + '\n' + 'By Cuzz, the creator');
          break;
          case 'test':
            const embed = new MessageEmbed()     
            .setTitle('Crrano ctmre')
            .setColor(0xff0000)
            .setDescription('Como se llama esta planteta!');
   
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
            message.reply('Auxilio dame contexto, pon un comando correcto pss kagada!');
          break;
      }

    
}
});

client.login(process.env.DISCORDJS_BOT_TOKEN);

