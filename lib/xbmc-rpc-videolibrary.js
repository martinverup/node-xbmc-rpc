(function() {
    var XBMCVideoLibrary = function(delegate) {
        this.delegate = delegate;
    };

    XBMCVideoLibrary.prototype.clean = function() {
        return this.delegate.rpc('VideoLibrary.Clean').then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"];
        return this.delegate.rpc('VideoLibrary.GetMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getRecentlyAddedMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"];
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getTVShows = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"];
        return this.delegate.rpc('VideoLibrary.GetTVShows', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCVideoLibrary;
})();
