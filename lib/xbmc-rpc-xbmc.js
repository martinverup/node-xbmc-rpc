(function() {
    var XBMCXBMC = function(delegate) {
        this.delegate = delegate;
    };

    XBMCXBMC.prototype.getInfoBooleans = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "booleans": [params]
            };
        } else if (params instanceof Array) {
            params = {
                "booleans": params
            };
        }
        params = params || {};
        params.booleans = params.booleans || ["Network.IPAddress"]; //default
        return this.delegate.rpc('XBMC.GetInfoBooleans', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCXBMC.prototype.getInfoLabels = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "labels": [params]
            };
        } else if (params instanceof Array) {
            params = {
                "labels": params
            };
        }
        params = params || {};
        params.labels = params.labels || ["Network.IPAddress"]; //default
        return this.delegate.rpc('XBMC.GetInfoLabels', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCXBMC;
})();
