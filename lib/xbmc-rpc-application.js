(function() {
    var XBMCApplication = function(delegate) {
        this.delegate = delegate;
    };

    XBMCApplication.prototype.getProperties = function(params) {
        params = params || {};
        params.properties = params.properties || ["volume", "muted", "name", "version"]; //default
        return this.delegate.rpc('Application.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCApplication.prototype.quit = function() {
        return this.delegate.rpc('Application.Quit').then(function(r) {
            return r.result;
        });
    };

    XBMCApplication.prototype.setMute = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "mute": params
            };
        }
        params = params || {};
        params.mute = params.mute || "toggle";
        return this.delegate.rpc('Application.SetMute', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCApplication.prototype.setVolume = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "volume": params
            };
        }
        params = params ||  {};
        params.volume = params.volume || 100;
        return this.delegate.rpc('Application.SetVolume', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCApplication;
})();
