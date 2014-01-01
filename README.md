node-xbmc-rpc
================
Node interface for XBMC using [JSON-RPC](http://wiki.xbmc.org/?title=JSON-RPC_API).

Usage example
================
```javascript
var xbmc_rpc = require('node-xbmc-rpc');

var xbmc = new xbmc_rpc({
    url: http://<HOST>:<IP>,
    user: <XBMC USERNAME>,
    password: <XBMC PASSWORD>
});

xbmc.rpc('GUI.ShowNotification', '{"title" : "Title", "message" : "Message"}').then(function(r) {
    console.log(r);
});
```
