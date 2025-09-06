const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
// this is a for loop that is going to iterate through every number in the stuedent report list and print out every number that is less than 30. 
for (let day in studentReport) {
    if (day < 30) {
        console.log(day);
    }
}
// this is a do while statement that is going to iterate throught he student report list and print every statement except the ones that are larger than 30. 
do {
    for (let day in studendReport)
        if (day < 30)
            console.log(day);
} while;

// this is a for each statement iterating through the student report list in order to print out every day that is less than the number 30. 
studentReport.forEach(function (day) {
    console.log(day)
})