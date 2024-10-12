#!name= chat Uncensored
#!desc= Active Premium chat

[Script]
chat = type=http-response,pattern= https://api.adapty.io/api/v1/sdk/analytics/profiles,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/sultan1sa/Rewrite/refs/heads/main/chat/unso.js,script-update-interval=0
[MITM]
hostname =  api.adapty.io