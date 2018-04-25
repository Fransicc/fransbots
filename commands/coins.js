const Discord = require("discord.js");
const coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
  //!coins
  if(!coins[message.author.id]){
    coins[message.author.id] = {
      coins: 0
    };
  }

  let uCoins = coins[message.author.id].coins;

  let coinEmbed = new Discord.RichEmbed()
  .setDescription("[Coins]")
  .setAuthor(message.author.username)
  .setColor("#42eef4")
  .addField("💸", uCoins);
  
  message.channel.send(coinEmbed).then(msg => {msg.delete(3500)});

}

module.exports.help = {
  name: "coins"
}
