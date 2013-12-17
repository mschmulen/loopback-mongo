/*!
 * A CRUD-capable model.
 */
var loopback = require('loopback');
var properties = require('./properties');
var config = require('./config');
var contact = loopback.Model.extend('contact', properties, config);

if (config['data-source']) {
  contact.attachTo(require('../' + config['data-source']));
}

module.exports = contact;
