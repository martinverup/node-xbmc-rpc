(function() {
    var XBMCVideoLibrary = function(delegate) {
        this.delegate = delegate;
    };

    XBMCVideoLibrary.prototype.clean = function() {
        return this.delegate.rpc('VideoLibrary.Clean').then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.export = function(params) {
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
        return this.delegate.rpc('VideoLibrary.Export', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getEpisodeDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "episodeid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "year", "art", "rating", "runtime", "imdbnumber", "showtitle", "season", "episode"]; //default
        return this.delegate.rpc('VideoLibrary.GetEpisodeDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getEpisodes = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "art", "rating", "runtime", "showtitle", "season", "episode"]; //default
        return this.delegate.rpc('VideoLibrary.GetEpisodes', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getGenres = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "thumbnail"]; //default
        return this.delegate.rpc('VideoLibrary.GetGenres', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMovieDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "movieid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMovieSetDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "setid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "fanart", "thumbnail", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieSetDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMovieSets = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "fanart", "thumbnail", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovieSets', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMusicVideoDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "musicvideoid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetMusicVideoDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getMusicVideos = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetMusicVideos', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getRecentlyAddedEpisodes = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedEpisodes', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getRecentlyAddedMovies = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedMovies', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getRecentlyAddedMusicVideos = function(params) {
        params = params || {};
        params.properties = params.properties || ["title", "playcount", "runtime", "thumbnail", "art", "artist", "album", "year", "track"]; //default
        return this.delegate.rpc('VideoLibrary.GetRecentlyAddedMusicVideos', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getSeasons = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["season", "showtitle", "playcount", "episode", "watchepisodes", "art"]; //default
        return this.delegate.rpc('VideoLibrary.GetSeasons', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getTVShowDetails = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetTVShowDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.getTVShows = function(params) {
        params = params || {};
        params.properties = params.properties || ["art", "thumbnail", "rating", "playcount", "year", "imdbnumber"]; //default
        return this.delegate.rpc('VideoLibrary.GetTVShows', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.removeEpisode = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "episodeid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveEpisode', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.removeMovie = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "movieid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveMovie', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.removeMusicVideo = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "musicvideoid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveMusicVideo', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.removeTVShow = function(params) {
        if (typeof(params) == 'number') {
            params = {
                "tvshowid": params
            };
        }
        params = params || {};
        return this.delegate.rpc('VideoLibrary.RemoveTVShow', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.scan = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "directory": params
            };
        }
        params = params || {};
        params.directory = params.directory || ""; //default
        return this.delegate.rpc('VideoLibrary.Scan', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.setEpisodeDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetEpisodeDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.setMovieDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetMovieDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.setMusicVideoDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetMusicVideoDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCVideoLibrary.prototype.setTVShowDetails = function(params) {
        params = params || {};
        return this.delegate.rpc('VideoLibrary.SetTVShowDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCVideoLibrary;
})();
