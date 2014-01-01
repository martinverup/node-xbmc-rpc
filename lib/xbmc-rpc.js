(function() {

    var request = require('request');
    var Q = require('q');

    var XBMCVideoLibrary = require('./xbmc-rpc-videolibrary');
    var XBMCPlayer = require('./xbmc-rpc-player');
    var XBMCInput = require('./xbmc-rpc-input');
    var XBMCSystem = require('./xbmc-rpc-system');
    var XBMCGUI = require('./xbmc-rpc-gui');

    var XBMC_RPC = function(input) {
        this.url = input.url;
        this.user = input.user;
        this.password = input.password;

        this.debug = input.debug ||  false;

        this.fail = false;

        this.videolibrary = new XBMCVideoLibrary(this);
        this.player = new XBMCPlayer(this);
        this.input = new XBMCInput(this);
        this.system = new XBMCSystem(this);
        this.gui = new XBMCGUI(this);

        //Is the server connectable?
        if (this.debug)
            console.log('Pinging XBMC at ' + this.url);
        this.ping().then(function(r) {
            this.fail = !r;
        }, function(error) {
            this.fail = true;
        });
    };

    XBMC_RPC.prototype.rpc = function(method, parameters) {
        if (this.fail) {
            console.log('XBMC is unavailable. Check your settings. Is XBMC running?');
            return false;
        }

        var params = (typeof parameters !== 'undefined' ? '"params": ' + parameters + ', ' : '');

        if (this.url[this.url.length - 1] != '/')
            this.url += '/';

        var rpc = '{"jsonrpc": "2.0", "method": "' + method + '", ' + params + '"id": 1}';

        var urlenc = this.url + 'jsonrpc?request=' + encodeURIComponent(rpc);

        if (this.debug)
            console.log((this.url.substring(0, 4) != "http" ? 'http://' : '') + this.url + 'jsonrpc?request=' + rpc);

        return makeRequest(urlenc, this.user, this.password);
    };

    function makeRequest(url, username, password) {

        var defer = Q.defer();

        if (url.substring(0, 4) != "http") {
            url = 'http://' + url;
        }

        var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

        var options = {
            'url': url,
            'headers': {
                'Authorization': auth,
                'Content-Type': 'json'
            }
        };

        function callback(error, response, body) {
            if (!error && response.statusCode == 200) {
                body = JSON.parse(body);
                defer.resolve(body);
            } else {
                defer.reject(error);
            }
        }

        request(options, callback);

        return defer.promise;
    };

    XBMC_RPC.prototype.ping = function() {
        return this.rpc('JSONRPC.Ping').then(function(r) {
            if (typeof(r) !== 'undefined') {
                return r.result == "pong";
            } else {
                return false;
            }
        });
    };

    module.exports = XBMC_RPC;
})();
