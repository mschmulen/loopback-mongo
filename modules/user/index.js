/*!
 * A CRUD-capable model.
 */
var loopback = require('loopback');
var properties = require('./properties');
var config = require('./config');
var user = loopback.Model.extend('user', properties, config);

if (config['data-source']) {
  user.attachTo(require('../' + config['data-source']));
}

module.exports = user;
