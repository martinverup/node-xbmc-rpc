(function() {
    var XBMCGUI = function(delegate) {
        this.delegate = delegate;
    };

    XBMCGUI.prototype.showNotification = function(params) {
        params = params || {};
        params.title = params.title || ""; //default
        params.message = params.message || ""; //default
        return this.delegate.rpc('GUI.ShowNotification', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCGUI;
})();
