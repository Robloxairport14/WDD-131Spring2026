// function convert(grade) {
//     switch (grade){
//         case 'A':
//             points = 4;
//             break;
//         case 'B':
//             points = 3;
//             break;
//         case 'C':
//             points = 2;
//             break;
//         case 'D':
//             points = 1;
//             break;
//         case 'F':
//             points = 0;
//             break;
//         default:
//             alert('not a valid grade');
//     }
//     return points;
// }

// const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


// const students = [
//     {last: 'Andrus', first: 'Aaron'},
//     {last: 'Masa', first:'Manny'},
//     {last: 'Tanda', first: 'Tamanda'}
// ];

//1: Javascript arrays
let names = ["Nark", "Mathan", "Markthaniel"];
console.log(names);


consoe.log(names[2]);

let grades = [89, 39, 55, 100];
console.log(grades[1]);

//2: Javascript objects
//own custom datatype
let studentName = "Brother Warner";
let studentClass = ["WDD131", "CSE110"];
let studentGrade = [67, 88];

let studentName1 = "Brother Warner";
let studentClass1 = ["WDD131", "CSE110"];
let studentGrade1 = [67, 88];

// this is an object literal
let student = {
    // key/value pairs
    name: "Brother Warner",
    classes: ["WDD131", "CSE110"],
    grades: [67, 88]
}
// accessing object properties objectName.keyName
console.log(student.classes);


//3: Array methods
names.forEach((name) => {
    //runs this function once every element in the array
    //one at a time
    console.log(name);
});

//map function return new array
let newName = names.map((name) => {
    return name + "Hatchley";
});

console.log(newName);

//return new array filtered by boolen
let filteredName = names.filter((name) => {
    return name[0] === "M";
})

console.log(filteredName);