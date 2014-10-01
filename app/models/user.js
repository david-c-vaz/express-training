var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: String
});

exports = mongoose.model('User', UserSchema);
