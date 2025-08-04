// JavaScript Lab 8:
// Advanced Object Manipulation and Data Handling in JavaScript



// Part 1: Understanding and creating objects

let student = {
    name: "Daniel",
    age: 34,
    enrolled: true,
    courses: ['JavaScript', 'Web Development', 'Database Design', 'Algorithms', 'Operating Systems'],
    info: function() {
        return `Student name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    }
};

console.log(student.name);
console.log(student.age);
console.log(student.info());