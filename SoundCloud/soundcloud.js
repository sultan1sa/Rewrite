var body = $response.body; 
var obj = JSON.parse(body); 

obj.plan = {
    "vendor" : "apple",
    "id" : "high_tier",
    "manageable" : true,
    "plan_upsells" : [

    ],
    "plan_id" : "go-plus",
    "upsells" : [

    ],
    "plan_name" : "SoundCloud Go+"
  },

obj.features.forEach(feature => { if (!feature.enabled) { feature.enabled = true; } });

body = JSON.stringify(obj);
$done({body});