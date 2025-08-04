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
        console.log(`Student name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`);
    }
};
// Outputting the name, age and the info display method:
console.log(student.name);
console.log(student.age);
student.info();



// Part 2: Working with JSON

// Converting the student object into a JSON string
let studentString = JSON.stringify(student);
console.log(studentString);

// Converting it back into a JavaScript object
let newStudent = JSON.parse(studentString);
console.log(newStudent);



// Part 3: Using destructuring assignment

// Destructuring the name and course properties from the student object
let { name, age, enrolled, courses } = student;
console.log(name);
console.log(courses);

// Creating an array of scores
let score = [90, 91, 92, 93, 94, 95];
// Destructuring the first 2 scores and logging them:
[first, second] = score;
console.log(first, second);



// Part 4: The spread operator

// Cloning the student object using the spread operator and adding a new property
let studentCopy = { ...student, graduationYear: 2027 };
console.log(studentCopy);

// Creating a new array
let newCourses = ['Advanced Frontend', 'Database Programming', 'Object Programming'];
// Combining the destructured courses property from student with the newCourses array and logging it
let combinedCourses = { courses, ...newCourses};
console.log(combinedCourses);



// Part 5: Object methods

// Copying the original student object in order to work on it
let studentNew = {
    name: "Daniel",
    age: 34,
    enrolled: true,
    courses: ['JavaScript', 'Web Development', 'Database Design', 'Algorithms', 'Operating Systems'],
    // A method within the object used to display the info
    info: function() {
        console.log(`Student name: ${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}, Courses: ${this.courses}`);
    },
    // A method to dynamically add a new course to the courses array
    addnewCourse: function(newCourse) {
        this.courses.push(newCourse);
        console.log(`${newCourse} added to course list`);
    },
    // A method that returns the total number of courses in the array
    totalCourses: function() {
        return this.courses.length;
    }
};

studentNew.addnewCourse("WRIT120");
console.log(studentNew.courses);
console.log(`Course totals: ${studentNew.totalCourses()}`);



// Bonus Task


function findSum(...nums) {
    return nums.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

let total = findSum(...score);
let avg = total / score.length;

console.log(avg);
