module.exports = {
    validate: function (unsecureOptions) {
        return {
            address: unsecureOptions.address || 'localhost',
            port: unsecureOptions.port || 80,
            timeout: unsecureOptions.timeout || 1000,
        }
    },
    build: function (hasError, options, timeDiff) {
        options.err = hasError;
        options.duration = timeDiff;
        options.isAvailable = hasError === false || hasError == null;
        return options;
    }
}