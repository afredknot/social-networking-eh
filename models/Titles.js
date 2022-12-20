const mongoose = require('mongoose');

const genreSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Titles = mongoose.model('Titles', genreSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// More than one document can have the same name value
Titles.find({}).exec((err, collection) => {
  if (collection.length === 0) {
    Titles.insertMany(
      [
        { name: 'Operation Dumbo Drop' },
        { name: 'We re Back' },
        { name: 'Homeward Bound' },
        { name: 'Horror'},
        { name: 'Romance' },
        { name: 'To Kill A Mockingbird' },
        { name: 'White Christmas' },
        { name: 'Fiddler on the Roof' },
      ],
      (insertErr) => {
        if (insertErr) {
          handleError(insertErr);
        }
      }
    );
  }
});

module.exports = Titles;
