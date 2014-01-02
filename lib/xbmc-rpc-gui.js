(function() {
    var XBMCGUI = function(delegate) {
        this.delegate = delegate;
    };

    XBMCGUI.prototype.showNotification = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "message": params
            };
        }
        params = params || {};
        params.title = params.title || "Notification"; //default
        params.message = params.message || ""; //default
        return this.delegate.rpc('GUI.ShowNotification', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCGUI;
})();
