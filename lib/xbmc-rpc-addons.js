(function() {
    var XBMCAddons = function(delegate) {
        this.delegate = delegate;
    };

    XBMCAddons.prototype.executeAddon = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        return this.delegate.rpc('Addons.ExecuteAddon', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAddons.prototype.getAddonDetails = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        params.properties = params.properties || ["name", "version", "enabled"]; //default
        return this.delegate.rpc('Addons.GetAddonDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAddons.prototype.getAddons = function(params) {
        if (typeof(params) == 'boolean') {
            params = {
                "enabled": params
            };
        }
        params = params || {};
        params.enabled = params.enabled || "all";
        params.properties = params.properties || ["name", "version", "enabled"]; //default
        return this.delegate.rpc('Addons.GetAddons', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAddons.prototype.setAddonEnabled = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "addonid": params
            };
        }
        params = params || {};
        params.addonid = params.addonid || ""; //default
        params.enabled = params.enabled || "toggle" //default
        return this.delegate.rpc('Addons.SetAddonEnabled', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCAddons;
})();
