
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = ' ! ';

bot.on('ready', () =>{
    console.log('MalvadaBot uruchomiony');
    bot.user.setActivity('MalvadaRPG', {type: 'PLAYING'})
})

bot.on('guildMemberAdd', member => {
    var user = member.user;

    const dolaczajacyEmbed = new Discord.RichEmbed()
	.setColor('#0066CC')
    .setAuthor(user.username, user.avatarURL)
    .setFooter('Użytkownik dołączył do serwera.');

    const privEmbed = new Discord.RichEmbed()
    .setColor('#0066CC')
    .setTitle('Witaj na MalvadaRPG!')
    .setDescription('Hej, miło Cię gościć na naszym serwerze. Niezapomnij również zerknąć na forum, które pojawi się niebawem.')
    .setFooter('Baw się dobrze!')

    member.guild.channels.get('645215168867074048').send(dolaczajacyEmbed);
    member.user.send(privEmbed);
});

bot.on('guildMemberRemove', member => {
    var user = member.user;

    const opuszczajacyEmbed = new Discord.RichEmbed()
	.setColor('#0066CC')
    .setAuthor(user.username, user.avatarURL)
    .setFooter('Użytkownik opuszcza serwer.');

    member.guild.channels.get('645215168867074048').send(opuszczajacyEmbed);
})

bot.on('guildMemberAdd', member => {
    bot.channels.get('646015359333433402').setName(`👦-użytkownicy: ${member.guild.memberCount}`);
})

bot.on('guildMemberRemove', member => {
    bot.channels.get('646015359333433402').setName(`👦-użytkownicy: ${member.guild.memberCount}`);
})

bot.login(process.env.BOT_TOKEN);
