const generateRandomString = (len = 100) => {
    let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let strlen = chars.length;
    let random = '';

    for(let i =0; i< len; i++) {
        let posn = parseInt((Math.random()) * strlen);
        random += chars[posn];
    }
    return random;
}

module.exports = {
    generateRandomString
}