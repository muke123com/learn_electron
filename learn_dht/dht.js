const crypto = require('crypto');

const nodeID = crypto.createHash('sha1').update((Math.random()*100000).toString()).digest();
console.log(nodeID);
