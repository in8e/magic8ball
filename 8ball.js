let userName = "Jane"

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!")

let userQuestion = "is it going to rain today?"

console.log(`Hello ${userName}, you have asked ${userQuestion}`)

let randomNumber = 0

randomNumber = Math.floor(Math.random()* 8);

let eightBall = randomNumber

if(eightBall === 0) {
    console.log("It is certain")
} else if(eightBall === 1) {
    console.log("It is decidedly so")
} else if(eightBall === 2) {
    console.log("reply hazy try again")
} else if(eightBall === 3) {
    console.log("Do not count on it")
} else if(eightBall === 4) {
    console.log("My sources say no")
} else if(eightBall === 5) {
    console.log("Outlook not so good")
} else if(eightBall === 6) {
    console.log("signs point to yes")
}