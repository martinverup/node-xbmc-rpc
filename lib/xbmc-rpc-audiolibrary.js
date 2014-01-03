(function() {
    var XBMCAudioLibrary = function(delegate) {
        this.delegate = delegate;
    };

    XBMCAudioLibrary.prototype.clean = function() {
        return this.delegate.rpc('AudioLibrary.Clean').then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.export = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "properties": {
                    "path": params
                }
            };
        }
        params = params || {};
        params.properties = params.properties || {
            "path": "/"
        }; //default
        return this.delegate.rpc('AudioLibrary.Export', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getAlbumDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "albumid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetAlbumDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getArtistDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "artistid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["genre", "formed", "yearsactive"]; //default
        return this.delegate.rpc('AudioLibrary.GetArtistDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getArtists = function(params) {
        params = params || {};
        params.properties = params.properties || ["genre", "formed", "yearsactive"]; //default
        return this.delegate.rpc('AudioLibrary.GetArtists', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getGenres = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "thumbnail"]; //default
        return this.delegate.rpc('AudioLibrary.GetGenres', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getRecentlyAddedAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyAddedAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getRecentlyAddedSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyAddedSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getRecentlyPlayedAlbums = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "genre", "albumlabel", "year", "playcount", "artistid"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyPlayedAlbums', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getRecentlyPlayedSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetRecentlyPlayedSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getSongDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "songid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetSongDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.getSongs = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "artist", "albumartist", "genre", "year", "album", "track", "duration"]; //default
        return this.delegate.rpc('AudioLibrary.GetSongs', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.scan = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "directory": params
            };
        }
        params = params || {};
        params.directory = params.directory || ""; //default
        return this.delegate.rpc('AudioLibrary.Scan', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.setAlbumDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetAlbumDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.setArtistDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetArtistDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCAudioLibrary.prototype.setSongDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('AudioLibrary.SetSongDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCAudioLibrary;
})();
