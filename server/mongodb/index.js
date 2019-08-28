const mongoose = require('mongoose');

const connect = () => {
  mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://admin:ZlnOvCbn5YRxyhrb@cluster0-pdzg7.gcp.mongodb.net/youtube-musics?retryWrites=true&w=majority', { useNewUrlParser: true });

  mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
  mongoose.connection.once('open', function() {
    console.log('MongoDB connected!');
  });
};

module.exports.connect = connect;
