(function() {
    var XBMCPlayer = function(delegate) {
        this.delegate = delegate;
    };

    var defaultplayer = 1;

    XBMCPlayer.prototype.getActivePlayers = function() {
        return this.delegate.rpc('Player.GetActivePlayers').then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.getProperties = function(params) {
        params = params || {};
        params.properties = params.properties || ["time", "percentage", "totaltime", "speed"];
        params.playerid = params.playerid ||  defaultplayer;
        return this.delegate.rpc('Player.GetProperties', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.getItem = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "playerid": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.goTo = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "playerid": defaultplayer,
                "to": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        player.to = player.to || "next";
        return this.delegate.rpc('Player.GoTo', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.move = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "playerid": defaultplayer,
                "direction": params
            };
        }
        params = params || {};
        params.playerid = params.playerid || defaultplayer;
        params.direction = params.direction || "left";
        return this.delegate.rpc('Player.Move', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    //New non-standard functions

    XBMCPlayer.prototype.getCurrentlyPlayingVideo = function() {
        var params = {};
        params.playerid = 1;
        params.properties = ["title", "year", "art", "rating", "runtime", "imdbnumber", "showtitle", "season", "episode"];
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.playPauseVideo = function() {
        var params = {};
        params.playerid = 1;
        return this.delegate.rpc('Player.PlayPause', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCPlayer;
})();
