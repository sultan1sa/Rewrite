[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Egern/refs/heads/main/js/itundnd.js
[mitm]
hostname = api.revenuecat.com 