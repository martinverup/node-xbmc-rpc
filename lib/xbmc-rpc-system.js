(function() {
    var XBMCSystem = function(delegate) {
        this.delegate = delegate;
    };

    XBMCSystem.prototype.ejectOpticalDrive = function() {
        return this.delegate.rpc('System.EjectOpticalDrive').then(function(r) {
            return r.result;
        });
    };

    XBMCSystem.prototype.getProperties = function(params) {
        params = params || {};
        params.properties = params.properties || ["canshutdown", "cansuspend", "canhibernate", "canreboot"]; //default
        return this.delegate.rpc('System.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCSystem.prototype.hibernate = function() {
        return this.delegate.rpc('System.Hibernate').then(function(r) {
            return r.result;
        });
    };

    XBMCSystem.prototype.reboot = function() {
        return this.delegate.rpc('System.Reboot').then(function(r) {
            return r.result;
        });
    };

    XBMCSystem.prototype.shutdown = function() {
        return this.delegate.rpc('System.Shutdown').then(function(r) {
            return r.result;
        });
    };

    XBMCSystem.prototype.suspend = function() {
        return this.delegate.rpc('System.Suspend').then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCSystem;
})();
