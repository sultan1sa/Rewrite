/*
rochat

[rewrite_local]
https://api.rochathub.com/inteco.user.v1.UserRightsService/GetUserRights url script-response-body https://raw.githubusercontent.com/sultan1sa/Rewrite/refs/heads/main/all/rochat.js

[mitm]
hostname = api.rochathub.com

*/

var objc = JSON.parse($response.body);
    objc = {
  "rights" : {
    "generalbotLeftTimes" : 5000,
    "premiumbotLeftTimes" : 595,
    "gptLeftTimes" : 5000,
    "premiumbotTotalTimes" : 600,
    "gptDisplayName" : "GPT-4",
    "gptTotalTimes" : 300,
    "haveStripeBill" : true,
    "generabotDisplayName" : "通用Bot",
    "premiumbotDisplayName" : "专业Bot",
    "generalbotTotalTimes" : 500,
    "memberShipRights" : {
      "term" : "yearly",
      "starttime" : "1706442853",
      "expiredtime" : "1883639265"
    },
    "isGeneralbotUnlimited" : true
  }
}


$done({body : JSON.stringify(objc)});