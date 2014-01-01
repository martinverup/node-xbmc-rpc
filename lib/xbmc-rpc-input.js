(function() {
    var XBMCInput = function(delegate) {
        this.delegate = delegate;
    };

    XBMCInput.prototype.back = function() {
        return this.delegate.rpc('Input.Back').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.contextMenu = function() {
        return this.delegate.rpc('Input.ContextMenu').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.down = function() {
        return this.delegate.rpc('Input.Down').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.executeAction = function(params) {
        if (typeof(params) == 'undefined') {
            params = {
                "action": "left" //default action
            }
        } else if (typeof(params) == 'string') {
            params = {
                "action": params
            };
        }
        return this.delegate.rpc('Input.ExecuteAction', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.home = function() {
        return this.delegate.rpc('Input.Home').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.info = function() {
        return this.delegate.rpc('Input.Info').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.left = function() {
        return this.delegate.rpc('Input.Left').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.right = function() {
        return this.delegate.rpc('Input.Right').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.select = function() {
        return this.delegate.rpc('Input.Select').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.sendText = function(params) {
        if (typeof(params) == 'undefined') {
            params = {
                "text": "" //default string
            }
        } else if (typeof(params) == 'string') {
            params = {
                "text": params
            };
        }
        params.done = params.done || true;
        return this.delegate.rpc('Input.SendText', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.showCodec = function() {
        return this.delegate.rpc('Input.ShowCodec').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.showOSD = function() {
        return this.delegate.rpc('Input.ShowOSD').then(function(r) {
            return r.result;
        });
    };

    XBMCInput.prototype.up = function() {
        return this.delegate.rpc('Input.Up').then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCInput;
})();
