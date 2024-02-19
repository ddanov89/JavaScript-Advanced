function requestValidator(obj) {

    let validMethod = ["GET", "POST", "DELETE", "CONNECT"];
    let uriPattern = /^[w.]+$/g;
    let validVersion = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    let invalidSymbols = ['<', '>', '\\', '&', `'`, `"`];

    if (!validMethod.includes(obj.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!obj.uri || !obj.uri === "*" || !obj.uri.match(uriPattern)) {
        throw new Error(`Invalid request header: Invalid URI`)
    }

    if (!validVersion.includes(obj.version)) {
        throw new Error(`Invalid request header: Invalid Version`);
    }
    if (!obj.hasOwnProperty("message")) {
        throw new Error(`Invalid request header: Invalid Message`);
    }
    for (let el of obj.message) {
        if (invalidSymbols.includes(el)) {
            throw new Error(`Invalid request header: Invalid Message`);
        }
    }
    // return obj;
    console.log(obj);
}
obj = {
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
};

obj = {
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
}

obj = { method: 'POST', uri: 'home.bash', message: 'rm -rf /*' };