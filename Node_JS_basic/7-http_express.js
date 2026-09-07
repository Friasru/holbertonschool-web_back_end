const express = require('express');
const fs = require('fs');

const app = express();
const dbPath = process.argv[2];

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  fs.readFile(dbPath, 'utf8', (error, data) => {
    if (error) {
      res.send('This is the list of our students\nCannot load the database');
      return;
    }

    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const students = lines.slice(1).map((line) => line.split(','));

    const fields = {};
    for (const student of students) {
      const firstname = student[0];
      const field = student[3];

      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }

    let output = `This is the list of our students\nNumber of students: ${students.length}`;

    for (const field of Object.keys(fields)) {
      output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
    }

    res.send(output);
  });
});

app.listen(1245);

module.exports = app;
