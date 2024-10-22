[rewrite_local]
https:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/(?!.*\/(offerings|attributes|adservices_attribution)$).*) url script-response-body https://raw.githubusercontent.com/sultan1sa/Egern/refs/heads/main/js/resp
[mitm]
hostname = api.revenuecat.com 