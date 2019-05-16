const {
    readFileSync,
    readJs
} = require('./utils');

module.exports = {
    'GET /comments/hotflow?': readJs('./user.js') 
}