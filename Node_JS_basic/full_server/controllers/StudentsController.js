import readDatabase from '../utils';

export default class StudentsController {
  static getAllStudents(request, response) {
    const dbPath = request.app.get('dbPath');

    readDatabase(dbPath)
      .then((students) => {
        const fields = Object.keys(students).sort((a, b) =>
          a.toLowerCase().localeCompare(b.toLowerCase())
        );

        let output = 'This is the list of our students';

        for (const field of fields) {
          output += `\nNumber of students in ${field}: ${students[field].length}. List: ${students[field].join(', ')}`;
        }

        response.status(200).type('text/plain').send(output);
      })
      .catch(() => {
        response.status(500).type('text/plain').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(request, response) {
    const major = request.params.major;

    if (major !== 'CS' && major !== 'SWE') {
      response.status(500).type('text/plain').send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = request.app.get('dbPath');

    readDatabase(dbPath)
      .then((students) => {
        const list = students[major] || [];
        response.status(200).type('text/plain').send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        response.status(500).type('text/plain').send('Cannot load the database');
      });
  }
}
