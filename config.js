//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Calabar";
global.github = process.env.GITHUB || "https://github.com/EMMYHENZ-TECH";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VangYOt96H4JhFarL10C";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.devs = "https://t.me/EmmyHenz";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348130450297";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/7XTnzx9/IMG-20240927-WA0011.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2349121785627,2349125042727";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUpPaVBadmRvNGpEY1BuOGo1Nk1rK2JiVzZ6MzZhUDQ2SWkzditJR1YwND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXVHMjFDODg3Z21sa1VMeng0VEhxdllsNGdic3RpZEN2bVQ1MmdVUC9sOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQkZra0lhUU91UjZ0YXRKZjFkRXRTNXZBZFZlNko4UytwVHVSWWdaTDBNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFMGtMdElEZS9GUjdjM0tBeEtlb281ZSthOW1YUXdTQUFZamg5dVBDK1RjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFbWNzakZlWGxVV0l2bUV1bmpFL2pJK0ZjVURVMGphRVFmMnIxVzlzWGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpDaS9ScENOaFY4bmxtZEhFNFNNUFRQTzhvL2JGUXNyNkRiM0tTVi9pMlU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUlTUHhLZTAzY0Zpclh1d28zSGU0SFFiWG5RS1VuVEx3TkN0eC9ZY2cyST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0VzZlVCMUN2b0dWbkxMamJTRTEwZTZMbmw0ejhCNnkvcTk3d2NUSFZrZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRuVUV1RVZucEtmUWwxdWFTU3p3OVlqclBWWWlNUmo4THVOL2JKaXlKa2YrUXhtZmZJdDdtL3dzQjJyQ1dOb1VONk5aZWh6K0h3eXJwQ1FXckF2M0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjgsImFkdlNlY3JldEtleSI6IjVkeEQ5ejQvZEFmWlp6dHZobDNFbWc5RFFsYlVkOVJ4ek1sTzVFenJxTVk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjV1WmUzcF9kUlltY3JuZTJTaEEwRnciLCJwaG9uZUlkIjoiZjNmNDFjM2ItMTYwNy00ZjBjLWI0YTItNTEyMzI2YWMwOTAwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlST0c3VktBaUt1TUNSeWpLQmtsWFRCVFVLST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCQzRzNFk5YS9aWVFqYnJ5bE12NG9IdWo0RmM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiSFBMNTNWTlMiLCJtZSI6eyJpZCI6IjIzNDgwNjA0NjM3NzE6OUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTHE0cmxRUXM4eml1UVlZQXlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoibnoxSi9wbE9xK3Rjam1RVURIMEw4T1V2SHJzSUJ3ZFF4V1VzOFBqc1F4cz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUmlJakUvSngwdktPemdVNXRHVmRhaGRaeUdRbnZHTFliU1QrZUR1Wm54L3RNdWIwMGo4NmtJKy9qa21ZdDJxUzd3L2ZLdGpRTXVacVBWSktUbDREQnc9PSIsImRldmljZVNpZ25hdHVyZSI6IkRuQTVKZlBDTmlhellIaU1VL095ZDdkN2tyQk15VVUvZ2gwVGdITm9jZUVKS1BPYmRTMnFGbGdqU09yV3huOS9nZXFYcFpXSWZFOW5wRWNTQzZTZkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA2MDQ2Mzc3MTo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlo4OVNmNlpUcXZyWEk1a0ZBeDlDL0RsTHg2N0NBY0hVTVZsTFBENDdFTWIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzE3NjU4MjUsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUGp2In0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "EMMY_HENZ-V3",
  packname: process.env.PACK_NAME || "sheriff",
  botname: process.env.BOT_NAME || "EMMY_HENZ-V3",
  ownername: process.env.OWNER_NAME || "mr smile boss",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
