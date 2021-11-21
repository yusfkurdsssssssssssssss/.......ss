const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**Reyna Canary Help**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://cdn.discordapp.com/avatars/811955068563488788/0d2f650ba4544decd768924878747a3b.webp?size=1024`)
    .setTitle(`**Reyna Canary Help**`)
    .setDescription(`

**User Commands**
> \`.invite\` - \`.support\` - \`.about\`
> \`.ping\` - \`.prefix\` - \`.uptime\`
> \`.se\` - \`.avatar\` - \`.embed\`
> \`.invites\` - \`.emojiinfo\` - \`.count\`
> \`.servericon\` - \`.vote\`
**Music Commands**
> \`.play\` - \`.skip\` - \`.skipto\`
> \`.stop\` - \`.volume\` - \`.nowplaying\`
> \`.shuffle\` - \`.search\` - \`.resume\`
> \`.remove\` - \`.queue\` - \`.filter\`
> \`.loop\` - \`.lyrics\` - \`.radio\`
> \`.join\` - \`.disconnct\` - \`.move\`
**Fun Commands**
> \`.serverinfo\` - \`.userinfo\`
> \`.lock\` - \`unlock\`
> \`.ban\` - \`.unban\`
> \`.mute\` - \`.unmute\`
> \`.slowmode\` - \`.giveaway\`
> \`.clear\` - \`.say\`
> \`.bans\` - \`.cv\`
> \`.create-channel\`
> \`.delete-channel\`
**Game Commands**
> \`.slap\` - \`.hug\`
**Gifs Commands**
> \`.boy\` - \`.girl\` - \`.baby\`
> \`.couple\` - \`.animal\` - \`.anime\`
> \`.emoji\`
**Photo Commands**
> \`.pboy\` - \`.pgirl\` - \`.pbaby\`
> \`.pcouple\` - \`.panimal\` - \`.panime\`
> \`.pemoji\`
**Links**
[Support](https://discord.gg/gwdAbxAnhg) - [Invite](https://discord.com/api/oauth2/authorize?client_id=811955068563488788&permissions=8&scope=bot)
`)

   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#FFF712");
   message.react("<:emoji_15:830469967752724500>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
