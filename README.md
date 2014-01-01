node-xbmc-rpc
================
Node interface for XBMC using [JSON-RPC](http://wiki.xbmc.org/?title=JSON-RPC_API).

Usage example
================
```javascript
var xbmc_rpc = require('node-xbmc-rpc');

var xbmc = new xbmc_rpc({
    url: <XBMC HOST>,
    user: <XBMC USERNAME>,
    password: <XBMC PASSWORD>
});

xbmc.player.getCurrentlyPlayingVideo().then(function(r) {
    console.log(r);
});

xbmc.input.sendText('{"text": "This text is sent to XBMC"}').then(function(r) {
    console.log(r);
});

// OR

xbmc.input.sendText('This text is sent to XBMC').then(function(r) {
    console.log(r);
});


```
