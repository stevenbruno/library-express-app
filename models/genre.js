var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreInstanceSchema = new Schema(
  {
    name: { type: String, required: true, min: 3, max: 100 },
  }
);

// Virtual for bookinstance's URL
GenreInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/genre/' + this._id;
  });

//Export model
module.exports = mongoose.model('GenreInstance', GenreInstanceSchema);