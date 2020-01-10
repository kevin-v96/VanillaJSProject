module.exports = function(source) {
    return source.replace(/__\((.*?)\)/g, function(a,b) {
        return ('<h1>'+b+'</h1>');
    });
};