// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// Pseudo code:

// a) Create a test with expect statements for each of the variables provided.
// Answered by Chris in class
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// b) Create the function that makes the test pass.
// Answered by Chris in class. 

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// Pseudo code:
// Input: An object as an argument
// Output: If the number inside it is evenly divisible by three or not
// Create a function called divByThree that passes the object as an argument
// Use a ternary to decide if a number modulus 3 is === 0, if yes then the number is evenly divisible, if not then the number is not
// Retrun the expected statements


// a) Create a test with expect statements for each of the variables provided.

describe("divByThree", (object) => {
    it("decides if the number inside it is evenly divisible by three or not.", () => {
        expect(divByThree(object1)).toEqual("15 is divisible by three")
        expect(divByThree(object2)).toEqual("0 is divisible by three")
        expect(divByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// FAIL  ./code-challenges.test.js
// divByThree
//   ✕ decides if the number inside it is evenly divisible by three or not.

// ● divByThree › decides if the number inside it is evenly divisible by three or not.

//   ReferenceError: divByThree is not defined


// b) Create the function that makes the test pass.
const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

const divByThree = (obj) => {
    return obj.number % 3 === 0 ? `${obj.number} is divisible by three` : `${obj.number} is not divisible by three`
}

// PASS  ./code-challenges.test.js
// divByThree
//   ✓ decides if the number inside it is evenly divisible by three or not. (1 ms)

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// Pseudo code:
// Input: An array of words
// Output: An array with all the words capitalized
// Create a function name capArr
// Iterate through the array with a .map , use str.charAt(0) to access the first letter of each string, then use .toUpperCase() to capitalize that character while + str.slice() gives us a stopping point so not all letters get capitalized. 

// Return the new array with capitalizations

// a) Create a test with expect statements for each of the variables provided.

describe("capArr", () => {
    it("returns an array with all the words capitalized", () => {
        expect(capArr(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capArr(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"]
        )
    })
})

// FAIL  ./code-challenges.test.js

// capArr
//   ✕ returns an array with all the words capitalized

// ● capArr › returns an array with all the words capitalized

//   ReferenceError: capArr is not defined


const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// b) Create the function that makes the test pass.

const capArr = (array) => {
    return array.map((str) => {
        return str.charAt(0).toUpperCase() + str.slice(1) 
    })
}

// PASS  ./code-challenges.test.js
// capArr
//   ✓ returns an array with all the words capitalized (1 ms)


// --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// Pseudo code:
// Input: String
// Output: The index of the first vowel of each string
// Create a function called vowelIndex that takes in a string
// Use the search method to locate the index of the first occurance of a vowel
// Return the first occurances index

// a) Create a test with expect statements for each of the variables provided.

describe("vowelIndex", () => {
    it("takes in a string and logs the index of the first vowel", () => {
        expect(vowelIndex(vowelTester1)).toEqual(1)
        expect(vowelIndex(vowelTester2)).toEqual(0)
        expect(vowelIndex(vowelTester3)).toEqual(2)
    })
})

// FAIL  ./code-challenges.test.js
// vowelIndex
//   ✕ takes in a string and logs the index of the first vowel (1 ms)

// ● vowelIndex › takes in a string and logs the index of the first vowel

//   ReferenceError: vowelIndex is not defined

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

vowelIndex = (str) => {
        return str.search(/[e,a,i,o,u,]/i)
    }


    // PASS  ./code-challenges.test.js
    // vowelIndex
    //   ✓ takes in a string and logs the index of the first vowel (2 ms)


