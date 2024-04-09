module.exports.config = {
	name: "morse",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Joshua Sy",
	description: "morse code",
  usages: "[text]",
	commandCategory: "...",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/texttomorse?text=${juswa}`);
var morse = res.data.morse;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
  }