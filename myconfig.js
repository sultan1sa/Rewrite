/*************************************

项目名称：teak browser 合集 （此合集只包含10.5及以后的软件）


**************************************

[rewrite_local]
#修改
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/sultan1sa/Rewrite/main/myconfig.js
#清理
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/sultan1sa/Rewrite/main/myconfig.js


[mitm] 
hostname = api.revenuecat.com

************************************/

// GENERATED BY SGFRC By D3WXY
let obj = {
    "request_date_ms": 1704664060864,
    "request_date": "2024-01-07T21:47:40Z",
    "subscriber": {
        "non_subscriptions": {},
        "first_seen": "2024-01-07T21:42:02Z",
        // GENERATED BY SGFRC By D3WXY
        "original_application_version": "1",
        "other_purchases": {},
        "management_url": null,
        // GENERATED BY SGFRC By D3WXY
        "subscriptions": {
            "com.tk.client.lifetime": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            },
            "com.overdesigned.incognito.lifetime": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            },
            "no_ads_v1_1mo_ar_full": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            },
            "no_ads_v1_1mo_ar_full": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            },
            "PlusYearly": {
                "ownership_type": "PURCHASED",
                "store": "app_store",
                "is_sandbox": false,
                // GENERATED BY SGFRC By D3WXY
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                "purchase_date": "2020-03-27T07:52:54Z"
            }
        },
        "entitlements": {
            "pro_lt": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "com.tk.client.lifetime"
            },
            "unlock": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "com.overdesigned.incognito.lifetime"
            },
            "jodel_premium": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "no_ads_v1_1mo_ar_full"
            },
            "no_ads": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "no_ads_v1_1mo_ar_full"
            },
            "plus": {
                "ownership_type": "PURCHASED",
                // GENERATED BY SGFRC By D3WXY
                "store": "app_store",
                "is_sandbox": false,
                "expires_date": "2099-03-27T07:52:54Z",
                "original_purchase_date": "2020-03-27T07:52:55Z",
                // GENERATED BY SGFRC By D3WXY
                "purchase_date": "2020-03-27T07:52:54Z",
                "product_identifier": "PlusYearly"
            }
        },
        "original_purchase_date": "2024-01-07T21:38:41Z",
        // GENERATED BY SGFRC By D3WXY
        "original_app_user_id": "$RCAnonymousID:06923c3f1dfc4f23b1b56c9e24dbdffc",
        "last_seen": "2024-01-07T21:42:02Z"
    }
};
$done({response: {body: JSON.stringify(obj), status: 200}});
// GENERATED BY SGFRC By D3WXY