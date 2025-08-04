// JavaScript Lab 8:
// Advanced Object Manipulation and Data Handling in JavaScript



// Part 1: Understanding and creating objects

// An object named student with various properties
let student = {
    name: "Daniel",
    age: 34,
    enrolled: true,
    courses: ['JavaScript', 'Web Development', 'Database Design', 'Algorithms', 'Operating Systems'],
    // A method within the object used to display the info
    info: function() {
        return `Student name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`;
    }
};
// Outputting the name, age and the info display method:
console.log(student.name);
console.log(student.age);
console.log(student.info());

