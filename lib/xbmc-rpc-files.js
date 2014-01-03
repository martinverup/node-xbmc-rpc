(function() {
    var XBMCFiles = function(delegate) {
        this.delegate = delegate;
    };

    XBMCFiles.prototype.download = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "path": params
            };
        }
        params = params || {};
        return this.delegate.rpc('Files.Download', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCFiles.prototype.getDirectory = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "directory": params
            };
        }
        params = params || {};
        params.directory = params.directory || "/";
        return this.delegate.rpc('Files.GetDirectory', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCFiles.prototype.getFileDetails = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "file": params
            };
        }
        params = params || {};
        return this.delegate.rpc('Files.GetFileDetails', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCFiles.prototype.getSources = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "media": params
            };
        }
        params = params || {};
        params.media = params.media || "files";
        return this.delegate.rpc('Files.GetSources', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    XBMCFiles.prototype.prepareDownload = function(params) {
        if (typeof(params) == 'string') {
            params = {
                "path": params
            };
        }
        params = params || {};
        params.path = params.path || "/";
        return this.delegate.rpc('Files.PrepareDownload', JSON.stringify(params)).then(function(r) {
            return r.result;
        });
    };

    module.exports = XBMCFiles;
})();
