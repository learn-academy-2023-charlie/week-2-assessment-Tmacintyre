// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Charlie 2023"
// console.log(cohort.split(""))

// a) Your answer: Answered by Chris in class
// b) Verify and explain:Answered by Chris in class

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: Undefined
// b) Verify and explain: Since there is no return on the output, it is not registering what exactly is supposed to be the output.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: [8,10,12,14,16]
// b) Verify and explain: The .map high order function returns back a new array of the same length as the original. It iterates through the array multipliedByTwo and takes each value then multiplies it by two givin the condition set.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: [11, 13, 15]
// b) Verify and explain: The above output is givin due to using the .filter() high order function to create a subset of the array and iterates through the original array to only include odd numbers. If a number mod 2 does not equal 0 then it must be an odd number.

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
// console.log(myCodingSkills.languages[0])

// a) Your answer: JavaScript
// b) Verify and explain: JavaScript is being logged as we are first accessing the object myCodingSkills, then the languages "key" using dot notation, and then the information in the 0 index of the array associated with the "key" languages.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Charlie"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
// console.log(learnStudent)
 
// a) Your answer: { student: "George", cohort: "Charlie", year: 2023}
// b) Verify and explain: So what is happening here is within the class Learn, the constructor is looking to pass a name as a string and then assign it to the student property. The overall output is going to be a new object with three keys and the values associated within the key. With the variable learnStudent being assigned to a new Learn class taking in the name "George" as an argument and associating it with the student property creating a new object, once you console log the new variable you will recieve an output of the newly created object of keys and values.
 