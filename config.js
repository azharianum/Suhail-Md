const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID |SUHAIL_09_42_07_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzgsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwLFxuICAgICAgICAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgODcsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTUsXG4gICAgICAgIDgxLFxuICAgICAgICA3MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDUsXG4gICAgICAgIDk3LFxuICAgICAgICA2NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NCxcbiAgICAgICAgNTQsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjQxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxODMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzksXG4gICAgICAgIDQ4LFxuICAgICAgICAxNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNjgsXG4gICAgICAgIDI1MixcbiAgICAgICAgODEsXG4gICAgICAgIDE2NSxcbiAgICAgICAgOTIsXG4gICAgICAgIDg1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxODQsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDMzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTksXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMzksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgyLFxuICAgICAgICA1MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNDksXG4gICAgICAgIDMyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjI1LFxuICAgICAgICAwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEyMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgODYsXG4gICAgICAgIDksXG4gICAgICAgIDY2LFxuICAgICAgICA0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDg4LFxuICAgICAgICAzMixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDk4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDY2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEzMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDk4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDcyLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICA4NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA1NyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMjksXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjI3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgMTUyLFxuICAgICAgICA0NSxcbiAgICAgICAgODUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICA3MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMzUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjAsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDM1LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ1QkNmNlkwMFRUZmc0cUtlNUx3dDlDUDVneUFXY2ZGQWZXUktDTUNqK25RPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzEwNTc0NzQ4NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQjNCMEY5MkVFQ0I2QzZDNDZDNTQxRUQ1QzAzNUFFQjJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNzc3MzUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiOTIzMTA1NzQ3NDg2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0OTRGOTJCNjUxRjhCOEZGQ0JBNDM3RDk0REM4QzQ5OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA3NzczNTFcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwianM2OENDaFRRZlNJSDA1OFZucV9LUVwiLFxuICBcInBob25lSWRcIjogXCJkNmRhN2RlNC0xNjY2LTQyM2YtOWJhOC1kYjc5Y2RjN2Q0MGNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTUsXG4gICAgICAyNTEsXG4gICAgICAxNyxcbiAgICAgIDEwMSxcbiAgICAgIDI1NSxcbiAgICAgIDI1NCxcbiAgICAgIDEwNixcbiAgICAgIDIxNixcbiAgICAgIDEzMixcbiAgICAgIDgsXG4gICAgICAxNjAsXG4gICAgICAyMTcsXG4gICAgICA3OCxcbiAgICAgIDEzMCxcbiAgICAgIDEyMyxcbiAgICAgIDgxLFxuICAgICAgODksXG4gICAgICA0OSxcbiAgICAgIDg4LFxuICAgICAgODNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjUzLFxuICAgICAgMjA3LFxuICAgICAgMjE4LFxuICAgICAgMTgyLFxuICAgICAgMjAyLFxuICAgICAgMTE0LFxuICAgICAgMjUsXG4gICAgICAxNDYsXG4gICAgICAxMTgsXG4gICAgICA0OCxcbiAgICAgIDI0MCxcbiAgICAgIDE2NSxcbiAgICAgIDM2LFxuICAgICAgMTA4LFxuICAgICAgMTIxLFxuICAgICAgMjMzLFxuICAgICAgMjMyLFxuICAgICAgOTcsXG4gICAgICAyMDAsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTVNXM1pENzdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzEwNTc0NzQ4Njo4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyNzc2MzAzNzc1NzU1MDo4QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIuKJm+KDneKDreKDkfCfh6bwnZmD4oOs4oOb8J2ZjvCdmLzwnZmJIOKDnPCfpprig58g8J2ZhuKDr+KDofCdmYPwnZi88J2ZieKDofCfkpPhrYRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMR1lrSE1RZ1BYRHRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJabnBDMGhINDJoZ0wyYjRDRzc0a0dnbjB4N0tzOTM2Tm00bXFZNmhwM2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMnR3VWQ5ZCtsSEo1QTY1MHVCTjBldEpUc1FHNGlUK0ZDMG13aWdNK0xYZDJYSkpDWUo0SDhqcFV3TjVZWDZxSGM2bVBoZ0pOL0c1dlBaazVKRHZzQlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwianZpVXp5UnB2NjdPazVxWUZSbGllTUNnQ1h5aGx4dkovTzN3d1dhMWhMSm03YWFxMHRBTlBwTzlxMCthRkQxcjdPTHZxR2FiS25CZDlha3AwcjJMaUE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMTA1NzQ3NDg2OjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNzc3MzQ3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBRmNpXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFGY2kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJQYWFieHpNTEExNDl5Y0o1NnNzcEJmWjdzbVFvek9wRm1OS2w0WVJSUURrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI0MTQzNzc0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNzc3MzUwNzEyXCJ9Igp9|  ""  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
