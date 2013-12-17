/*!
 * A CRUD-capable model.
 */
var loopback = require('loopback');
var properties = require('./properties');
var config = require('./config');
var beacon = loopback.Model.extend('beacon', properties, config);

if (config['data-source']) {
  beacon.attachTo(require('../' + config['data-source']));
}

module.exports = beacon;
