const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      if(!message.member.hasPermission("ADMINISTRATOR")) return;
      const sayMessage = args.join(" ");
      message.delete().catch(500);
      message.channel.send(sayMessage);

}

module.exports.help = {
  name: "say"
}
