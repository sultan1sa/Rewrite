var objc = JSON.parse($response.body);

objc.payload.active = true;

$done({ body: JSON.stringify(objc) });