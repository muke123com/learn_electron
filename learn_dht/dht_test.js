const crypto = require('crypto');

console.log(randomId());

function randomId() {
    return crypto.createHash('sha1').update(crypto.randomBytes(20)).digest();
}