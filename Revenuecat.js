[rewrite_local]
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Rewrite/refs/heads/main/Revenuecat-unlocked/qx_revenucat.js
#^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
[MITM]
hostname = api.revenuecat.com