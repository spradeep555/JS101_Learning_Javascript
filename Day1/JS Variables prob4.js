// Problem 4
// Store the name, school, grade, section, rollno and the marks scored by the student in 3 subjects
// Print the report card of the student (You can make it look nice by using some keyboard symbols )
// Explore ASCII ART (https://en.wikipedia.org/wiki/ASCII_art (Links to an external site.))
// or Text Art (https://fsymbols.com/text-art/ (Links to an external site.)) for some inspiration


// Student Info
var studentName = "Pradeep";
var school = "Masai";
var grade = "10th";
var section = "A";
var rollNo = "cap06_146";
var subject1 = "html";
var subject2 = "css";
var subject3 = "Javascript";
var marksSubject1 = 85;
var marksSubject2 = 78;
var marksSubject3 = 82;

var totalMarks = marksSubject1 + marksSubject2 + marksSubject3;

// Print
console.log("**********************************************");
console.log("            STUDENT REPORT CARD");

console.log("**********************************************");
console.log("Name: " + studentName);
console.log("School: " + school);
console.log("Grade: " + grade);
console.log("Section: " + section);
console.log("Roll No: " + rollNo);
console.log("----------------------------------------------");
console.log("Subject         Marks");
console.log("----------------------------------------------");
console.log(subject1 + "            " + marksSubject1);
console.log(subject2 + "         " + marksSubject2);
console.log(subject3 + "      " + marksSubject3);
console.log("----------------------------------------------");
console.log("Total Marks: " + totalMarks);
console.log("**********************************************");
