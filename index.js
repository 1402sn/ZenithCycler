const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

const statuses = [
  {
    type: 'STREAMING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'Solly',
    details: 'a normal person',
    state: null,
    largeImage: 'https://media.discordapp.net/attachments/1116694463658598412/1201399281018482799/black-clover-black-clover-movie.gif?',
    largeText: null,
    smallImage: null,
    smallText: null,
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
  {
    type: 'STREAMING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'Solly',
    details: 'a normal person',
    state: null,
    largeImage: 'https://media.discordapp.net/attachments/1116694463658598412/1201399307279015936/mob-psycho100-mob-psycho.gif?',
    largeText: null,
    smallImage: null,
    smallText: null,
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
  {
    type: 'STREAMING', // LISTENING, PLAYING, STREAMING, WATCHING
    name: 'Solly',
    details: 'a normal person',
    state: null,
    largeImage: 'https://media.discordapp.net/attachments/1116694463658598412/1201399329890521138/gojo-six-eyes.gif?',
    largeText: null,
    smallImage: null,
    smallText: null,
    url: 'https://twitch.tv/zensware',
    buttons: [
      {
        label: 'Zenith Utility',
        url: 'https://discord.gg/stWgVnBgHq'
      },
      {
        label: 'button-2',
        url: 'https://link.link/'
      }
    ]
  },
];

let statusIndex = 0;
let startTime = Date.now();

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - cycling statuses!`);

  const updatePresenceAndActivity = () => {
    const currentStatus = statuses[statusIndex];

    const r = new Discord.RichPresence()
      .setApplicationId('1116621382466412614') // Get your application id @ https://discord.com/developers/applications
      .setType(currentStatus.type)
      .setURL(currentStatus.url)
      .setName(currentStatus.name)
      .setDetails(currentStatus.details)
      .setState(currentStatus.state)
      .setStartTimestamp(startTime)
      .setAssetsLargeImage(currentStatus.largeImage)
      .setAssetsLargeText(currentStatus.largeText)
      .setAssetsSmallImage(currentStatus.smallImage)
      .setAssetsSmallText(currentStatus.smallText);

    for (const button of currentStatus.buttons) {
      r.addButton(button.label, button.url);
    }

    client.user.setActivity(r);

    statusIndex = (statusIndex + 1) % statuses.length;
  };

  updatePresenceAndActivity();
  setInterval(updatePresenceAndActivity, 2500);

  client.user.setPresence({ status: 'idle' });
});

client.login(process.env.TOKEN);
