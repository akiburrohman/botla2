module.exports.config = {
    name: "unban",
    version: "2.0.0",
    hasPermssion: 0,
    credits: "NTKhang & fix BY hinata",
    description: "Warning a member 3 times will ban him from the group (remember to set qtv for bots)\nAuthor: NTKhang",
    commandCategory: "group",
    usages: "[args]",
    cooldowns: 5
};

module.exports.run = async function ({ api, event, args, Users, permssion, getText }) {
    let {messageID, threadID, senderID} = event;
    var info = await api.getThreadInfo(threadID);
    const out = msg => api.sendMessage(msg, threadID, messageID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return out(`Bot does not have permission to use this command.`);
    var fs = require("fs-extra");
    
    if (!fs.existsSync(__dirname + `/cache/databan.json`)) {
            const dataaa = {bans: {}, banned: {}};
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(dataaa));
                    }
  var databan = JSON.parse(fs.readFileSync(__dirname + `/cache/databan.json`)); //read file contents
  if(!databan.bans.hasOwnProperty(threadID)) {
            databan.bans[threadID] = {}; 
            fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
    
  }
  var id = parseInt(args[0]), mybox = databan.banned[threadID];
  var info = await api.getThreadInfo(threadID);
  if (!info.adminIDs.some(item => item.id == senderID) && !(global.config.ADMINBOT).includes(senderID)) return out(`Only administrators can use this command.`);
  if(!id) return out(`Enter the uid of the person who needs to be unban.`);
  databan.banned;
  var name = (await api.getUserInfo(id))[id].name
  if(!mybox.includes(id)) return out(`${name} hasn't been banned from the group yet.`);
  out(`${name} re-joined the group.`);
  mybox.splice(mybox.indexOf(id), 1);
  delete databan.bans[threadID][id]
  fs.writeFileSync(__dirname + `/cache/databan.json`, JSON.stringify(databan, null, 2));
      }