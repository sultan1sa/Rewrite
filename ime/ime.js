/*
ime 1.142.1
除了Ai功能，其他功能都可用

[rewrite_local]
api.imem.app/api/premium/getOwnStatus url script-response-body https://raw.githubusercontent.com/sultan1sa/Rewrite/main/ime/ime.js

[mitm]
hostname = api.imem.app

*/

var objc = JSON.parse($response.body);

objc.payload.active = true;

$done({ body: JSON.stringify(objc) });