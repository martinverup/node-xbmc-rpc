(function() {

    var request = require('request');
    var Q = require('q');

    var XBMCAddons = require('./xbmc-rpc-addons');
    var XBMCApplication = require('./xbmc-rpc-application');
    var XBMCAudioLibrary = require('./xbmc-rpc-audiolibrary');
    var XBMCFiles = require('./xbmc-rpc-files');
    var XBMCGUI = require('./xbmc-rpc-gui');
    var XBMCInput = require('./xbmc-rpc-input');
    var XBMCPVR = require('./xbmc-rpc-pvr');
    var XBMCPlayer = require('./xbmc-rpc-player');
    var XBMCPlaylist = require('./xbmc-rpc-playlist');
    var XBMCSystem = require('./xbmc-rpc-system');
    var XBMCVideoLibrary = require('./xbmc-rpc-videolibrary');
    var XBMCXBMC = require('./xbmc-rpc-xbmc');


    var XBMC_RPC = function(input) {
        this.url = input.url;
        this.user = input.user;
        this.password = input.password;

        this.debug = input.debug || false;

        this.fail = false;

        this.addons = new XBMCAddons(this);
        this.application = new XBMCApplication(this);
        this.audiolibrary = new XBMCAudioLibrary(this);
        this.files = new XBMCFiles(this);
        this.gui = new XBMCGUI(this);
        this.input = new XBMCInput(this);
        this.pvr = new XBMCPVR(this);
        this.player = new XBMCPlayer(this);
        this.playlist = new XBMCPlaylist(this);
        this.system = new XBMCSystem(this);
        this.videolibrary = new XBMCVideoLibrary(this);
        this.xbmc = new XBMCXBMC(this);

        //Is the server connectable?
        if (this.debug)
            console.log('Pinging XBMC at ' + this.url);
        this.ping().then(function(r) {
            this.fail = r.result != 'pong';
        }, function(error) {
            this.fail = true;
        });
    };

    XBMC_RPC.prototype.rpc = function(method, parameters) {
        if (this.fail) {
            console.log('XBMC is unavailable. Check your settings. Is XBMC running?');
            return false;
        }

        if (this.debug)
            console.log('XBMC connection established');

        var params = (typeof parameters != 'undefined' ? '"params": ' + parameters + ', ' : '');

        if (this.url[this.url.length - 1] != '/')
            this.url += '/';

        var rpc = '{"jsonrpc": "2.0", "method": "' + method + '", ' + params + '"id": "node-xbmc-rpc"}';

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
    

    XBMC_RPC.prototype.getConfiguration = function() {
        return this.rpc('JSONRPC.GetConfiguration').then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.introspect = function(params) {
        return this.rpc('JSONRPC.Introspect', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.notifyAll = function(params) {
        return this.rpc('JSONRPC.NotifyAll', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.permission = function() {
        return this.rpc('JSONRPC.Permission').then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.ping = function() {
        return this.rpc('JSONRPC.Ping').then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.setConfiguration = function(params) {
        return this.rpc('JSONRPC.SetConfiguration', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMC_RPC.prototype.version = function() {
        return this.rpc('JSONRPC.Version').then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMC_RPC;
})();
