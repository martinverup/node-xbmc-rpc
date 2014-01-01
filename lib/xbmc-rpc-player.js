(function() {
    var XBMCPlayer = function(delegate) {
        this.delegate = delegate;
    };

    XBMCPlayer.prototype.getActivePlayers = function() {
        return this.delegate.rpc('Player.GetActivePlayers').then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.getCurrentlyPlayingVideo = function() {
        var params = {};
        params.playerid = 1;
        params.properties = ["title", "year", "art", "thumbnail", "rating", "runtime", "imdbnumber"];
        return this.delegate.rpc('Player.GetItem', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCPlayer.prototype.playPauseVideo = function() {
        var params = {
            "playerid": 1
        };
        return this.delegate.rpc('Player.PlayPause', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCPlayer;
})();
