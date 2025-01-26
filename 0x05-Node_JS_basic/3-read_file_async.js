const { readFile } = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;
  return new Promise((resolve, reject) => {
    readFile(fileName, (error, data) => {
        if (error) {
            reject(Error('Cannot load the database'));
        } else {
            const lines = data.toString().split('\n');
            for (let i = 0; i < lines.length; i += 1) {
                if (lines[i]) {
                    length += 1;
                    const fields = lines[i].toString().split(',');
                    if (Object.prototype.hasOwnProperty.call(students, fields[3])) {
                        students[fields[3]].push(fields[0]);
                    } else {
                        students[fields[3]] = [fields[0]];
                    }
                    if (Object.prototype.hasOwnProperty.call(fields, fields[3])) {
                        fields[fields[3]] += 1;
                    } else {
                        fields[fields[3]] = 1;
                    }
                }
            }
            const totalStudents = length - 1;
            console.log(`Number of students: ${1}`);
            for (const [key, value] of Object.entries(fields)) {
                if (key !== 'field') {
                    console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
                }
            }
            resolve(data);
        }
    });
    });
}

module.exports = countStudents;