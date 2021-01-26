var ageOfStudent = [15, 30, 36, 24, 25];

var rupaliAge = ageOfStudent[3];

ageOfStudent [2] = 31;

var position = ageOfStudent.indexOf(25);

console.log(ageOfStudent);
ageOfStudent.push(27);
ageOfStudent.push(29);
console.log(ageOfStudent);
ageOfStudent.pop();
console.log(ageOfStudent);
ageOfStudent.unshift(83);
console.log(ageOfStudent);
ageOfStudent.shift();
console.log(ageOfStudent);
console.log("Position = " + position);
console.log("Age of Rupali = " + rupaliAge);
