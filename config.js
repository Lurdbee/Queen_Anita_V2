//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUpNTFljejJwZ0RKRUl1d3NMMENjaXVqZGJ3QTJHNHdFVHVFcXUxK2pWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNE5iOHJLa1c3bHhKS29lcTlabGRZcGhrbVFYT003L2NrcnplSU1XdXpVND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBTXFFdjkwSzBON3RtL3Eva3UxeHljbGVXY3FQU2lrMDhUNkUvM0I4bkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYbEJuWnVGS0trc3h4TWhnSElzdThLL01xeWswWE91Nmp3VW5KM01MQ2pJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVIUFEzMDVEbllFQ0VTby9HL1FjNHprV0prSG5FVC9GVjBwTDdhdDhRMFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikc4MGFqcUlHY1RDNDJxZ0tXYkk3dEJCL1BPZ0ZGcXRaSDdpSzNYZndSMjA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUhPM3doZ1kxYlZMNldDU2dMV1ZtTDl2bnZXL0E0YVVBeDN4c0c3d1czYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUVQcWgxTFRvdUFnZFNCMlBkdzhoL3I5SXM2Y1h6eDEzU1hkRWxCTk9YWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlB1aWlQUFA3WEtpa04yeGdkNXFzRWJIMUg0dHJQTFBWTGpWaHc1bGdUVHpzV2VYdlVHczkxTit5WEZZdU5rZEtEMmUydU9tMENubmVscE8wWmZETGhBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjE5LCJhZHZTZWNyZXRLZXkiOiI4NzdIaXdlM3YzZU1EQ0l0ZHpOUW5UYWlHa1NxVVFMQmFvQlN0clpoOGI0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJyT2pZT09QWlRBMlNBQzBBRFpYandBIiwicGhvbmVJZCI6ImJjZThhYmQxLWNlZTUtNGYxYy1hZDY4LWIzNGExNzdlZTc5OCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGNHBMV2hZNklxTUJyUDZ0eFdsaklnOVg3V1U9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTC96K05JRGRiaExtNW1aR2YxNjlxWERDVG1RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik0zQ1FCUUhOIiwibWUiOnsiaWQiOiIyMzQ5MTY1NjYxOTU5OjM0QHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ik9WRVJMT1JEIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJTFJ6Y0VGRUt1WWg3b0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJia2V4ZVZLV0FpcGQrcHVjOTdtR3FBUXdFbUxURmNobFdlVmVaaXZhZW40PSIsImFjY291bnRTaWduYXR1cmUiOiJHV0hhZ0xsV0V5VFNkenI0M0JvYmh1REJUUVRtei8xZ3dJU1JHeDIrSTUzMHlyTnYvSExaRUx4aDk3NlpLb3EwbEdTeHlackNZZ3pZVkdRY3Bxb2JCQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMlNiM29KaVlrUSs1aHZHYTUvV01adlcydllmbkwzY0kycWhQV2IvWUZlbXYvU3VTY3YyK3VBUm9nZStuTnNBTkVsamZzSVZQbWtteE51VC9TeHZjZ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTY1NjYxOTU5OjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlc1SHNYbFNsZ0lxWGZxYm5QZTVocWdFTUJKaTB4WElaVm5sWG1ZcjJucCsifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIzNjUzNzIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTHpZIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
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
