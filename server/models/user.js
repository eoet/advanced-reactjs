const mongooes = require('mongoose');
const Schema = mongooes.Schema;
const bcrypt = require('bcrypt-nodejs');

// Define our model
const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
});

// On save hook, encrypt the password
userSchema.pre('save', function (next) {
  const user = this;
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

userSchema.methods.comparePassword = (candidatePassword, callback) => {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    if (err) return callback(err);
    callback(null, isMatch);
  });
};

// Create the model class
const ModelClass = mongooes.model('user', userSchema);

// Export the model
module.exports = ModelClass;
