const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
    console.log('MongoDB connected!');
  });
};

module.exports.connect = connect;
