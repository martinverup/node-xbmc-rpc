(function() {

    var request = require('request');
    var Q = require('q');

    var XBMC_RPC = function(input) {
        this.url = input.url;
        this.user = input.user;
        this.password = input.password;

        this.fail = false;

        this.ping().then(function(r) {
            this.fail = !r;
        }, function(error) {
            this.fail = true;
        });
    };

    XBMC_RPC.prototype.rpc = function(method, properties, sort, limits) {
        if (this.fail) {
            console.log('XBMC is unavailable. Check your settings. Is XBMC running?');
            return false;
        }

        if (this.url[this.url.length - 1] != '/')
            this.url += '/';

        var props = (typeof properties !== 'undefined' ? '"properties": ' + properties + ', ' : ''),
            sorts = (typeof sort !== 'undefined' ? '"sort": ' + sort + ', ' : ''),
            lims = (typeof limits !== 'undefined' ? '"limits": ' + limits : '');

        var params;
        if (props != '' && sorts == '' && lims == '') {
            params = properties;
        } else {
            params = '{' + props + sorts + lims + '}';
        }

        var rpc = '{"jsonrpc": "2.0", "method": "' + method + '", "params": ' + params + ', "id": 1}';

        var urlenc = this.url + 'jsonrpc?request=' + encodeURIComponent(rpc);

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
