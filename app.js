var totalmarks = 500;

var urdumarks = +prompt('enter your urdu marks');
var mathmarks = +prompt('enter your maths marks');
var islamiatmarks = +prompt('enter your islamiat marks');
var englishmarks = +prompt('enter your english marks');
var obtainedMarks = urdumarks + mathmarks + islamiatmarks + englishmarks;
var percentage = obtainedMarks / totalmarks * 100;

console.log("You Get " + percentage + "%");