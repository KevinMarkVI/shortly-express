var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var Link = require('./link.js');


var User = db.Model.extend({
  tableName: 'users',

  link: function() {
    return this.hasMany(Link);
  },

  initialize: function(params){
    var user = this;
    bcrypt.hash(params.password, null, null, function(err, hash){
      user.set('password', hash);
      console.log(params.password)
    })
  }
});



module.exports = User;