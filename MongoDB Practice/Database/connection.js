
const mongoose = require('mongoose')

const uri = process.env.MONGO_URI;

mongoose.connect(uri)
.then(() => {
  console.log('Database Connected');
})
.catch(err => {
  console.error('Error connecting to MongoDB:', err.message);
});
module.exports = mongoose;