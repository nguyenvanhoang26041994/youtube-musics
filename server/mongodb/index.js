const mongoose = require('mongoose');

let uri = process.env.MONGODB_URI;

if (process.env.NODE_ENV == 'development') {
  uri = require('../../secret').mongodb.uri;
}

const connect = () => {
  mongoose.connect(uri, { useNewUrlParser: true });

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
    console.log('MongoDB connected!');
  });
};

module.exports.connect = connect;
