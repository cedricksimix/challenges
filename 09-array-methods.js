// have access to students from data.js

const updatedStudents = students.map(function (student) {
  // console.log(student);
  student.role = 'student';
  return student;
});

// console.log(updatedStudents);

const highScores = students.filter(function (student) {
  // if (student.score >= 80) {
  //   return student; //  a value that coerces to true
  // }

  // if (student.score >= 80) return student;
  return student.score >= 80;
});

// console.log(highScores);

const specificId = students.find(function (banana) {
  return banana.id === 6;
});
