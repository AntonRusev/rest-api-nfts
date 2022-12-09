function parseError(error) {
    if (Array.isArray(error)) {
        return error.map(e => e.msg).join('\n');
    } else if (error.name == 'ValidationError') {
        return Object.values(error.errors).map(v => v.message).join('\n');
    } else {
        return error.message;
    }
}

// TODO see if errors have to be returned as an array (remove /join) or an object

module.exports = {
    parseError
};