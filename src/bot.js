require('dotenv').config();

//console.log(process.env.DISCORDJS_BOT_TOKEN);
let price = require('crypto-price')

const { Client, MessageAttachment, MessageEmbed ,WebhookClient} = require('discord.js');
const client = new Client();
const PREFIX = "zz"

client.on('ready', () => {


  const hook = new WebhookClient('814986585417973870', 'arDnw2G_T-JYZRprkPATShtozfp3QqV5KQRihezWVm6QRjleUSKUtXdmfx387oMEocDm');
  hook.send("El crrabot esta en linea!------------------------"+ "\n"+'Entorno: ' + process.env.ENVIRONMENT);
  https://discord.com/api/webhooks/814986585417973870/arDnw2G_T-JYZRprkPATShtozfp3QqV5KQRihezWVm6QRjleUSKUtXdmfx387oMEocDm

  console.log("El crrabot esta en linea!------------------------"+ "\n"+'Entorno: ' + process.env.ENVIRONMENT);

});

client.on('message', async message => {

  const messageCommand = message.content;

  if (messageCommand.startsWith(PREFIX)) {
    const [CMD_NAME, ...args] = messageCommand.trim().substring(PREFIX.length).split(/\s+/);

    switch (CMD_NAME) {
      case 'precio':


        price.getCryptoPrice('USD', args[0].toUpperCase()).then(obj => { // Base for ex - USD, Crypto for ex - ETH 
          console.log(obj)
          //message.channel.send(JSON.stringify(obj.price));


          const embed = new MessageEmbed()
            .setTitle('CryptoCrrano el precio del ' + args[0].toUpperCase() + ' es:')
            .setColor(0xff0000)
            .setDescription('Precio: ' + obj.price + ' USD' + '\n' + 'Volumen: ' + obj.volume + '\n' + 'Cambio: ' + obj.change);
          message.channel.send(embed);

        }).catch(err => {
          const embed = new MessageEmbed()
            // Set the title of the field
            .setTitle('Crrano Gil!')
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
      case 'info':
        const embedInfo = new MessageEmbed()
        .setTitle('Crrabot, a la orden mi chamo')
        .setColor(0xff0000)
        .setDescription('Entorno: ' + process.env.ENVIRONMENT+ "\n" + "Development by: Cuzz, the creator" + "\n" + "Version: V0.5.");

      message.channel.send(embedInfo);

        //message.reply('Crrabot version v0.3. Hay talento, falto apoyo!' + '\n' + 'By Cuzz, the creator');
        break;
      case 'test':
        const embedTest = new MessageEmbed()
          .setTitle('Crrano ctmre')
          .setColor(0xff0000)
          .setDescription('Como se llama esta planteta!');

        message.channel.send(embedTest);
        break;
/*       case 'testcommand':
        var res = { comando: CMD_NAME, parametros: args.toString() }

        message.channel.send(JSON.stringify(res));
        break; */
      case 'monachina':
        const attachment = new MessageAttachment('https://media.discordapp.net/attachments/321803801160056844/814395021113032744/1c2bcd4.jpg?width=283&height=534');
        message.channel.send(attachment);
        break;
      case 'gnomo':
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const ytdl = require('ytdl-core');
          const dispatcher = connection.play(ytdl('https://www.youtube.com/watch?v=KnHmoA6Op1o&ab_channel=Gnome', { filter: 'audioonly' }));
          dispatcher.setVolume(0.8); // half the volume

          dispatcher.on('finish', () => {
            console.log('Finished playing!');
            dispatcher.destroy();
            connection.disconnect();
          });

        
        } else {
          message.channel.send('Conectate al chat de audio primero kagada!');
        }
        break;
        case 'callacagada':
          if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();
            const ytdl = require('ytdl-core');
            connection.play(ytdl(' https://www.youtube.com/watch?v=jiu2i-2b7kU&ab_channel=JuanCarlosOsunaGalv%C3%A1n', { filter: 'audioonly' }));
            dispatcher.setVolume(0.5); // half the volume
  
            dispatcher.on('finish', () => {
              console.log('Finished playing!');
            });
  
            dispatcher.destroy();
          } else {
            message.channel.send('Conectate al chat de audio primero kagada!');
          }
          break;
       
      case 'estudiasonso':
        if (message.member.voice.channel) {
          const connection = await message.member.voice.channel.join();
          const ytdl = require('ytdl-core');
          connection.play(ytdl('https://www.youtube.com/watch?v=enDATZ0YoYc&ab_channel=BenjaminPujaico', { filter: 'audioonly' }));
          dispatcher.setVolume(0.5); // half the volume

          dispatcher.on('finish', () => {
            console.log('Finished playing!');
          });

          dispatcher.destroy();
        } else {
          message.channel.send('Conectate al chat de audio primero kagada!');
        }
        break;
      default:
        message.reply('Auxilio dame contexto, pon un comando correcto pss kagada!');
        break;
    }


  }
});

client.login(process.env.DISCORDJS_BOT_TOKEN);



