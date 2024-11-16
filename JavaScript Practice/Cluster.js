const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  
  fs.promises.readFile('file1.txt')
    .then(data1 => {
      // Chain to read the second file after the first one
      return fs.promises.readFile('file2.txt', 'utf8')
      .then(data2 => ({ data1, data2 }));
    })
    .then(({ data1, data2 }) => {
      // Chain to read the third file after the second one
      return fs.promises.readFile('file3.txt', 'utf8')
      .then(data3 => ({ data1, data2, data3 }));
    })
    .then(({ data1, data2, data3 }) => {
      // Once all files are read, send the content to the client
      res.send(`<pre>${data1}\n\n${data2}\n\n${data3}</pre>`);
    })
    .catch(err => {
      // Handle errors if any file read operation fails
      console.error(err);
      res.status(500).send('Error reading files');
    });
});

// Start the Express server
app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
