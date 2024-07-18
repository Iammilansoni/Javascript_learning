// Stack Memory (primitive data type), Heap Memory(Non- Primitive data type)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
console.log(anothername);

anothername ="chaiaurcode"
console.log(anothername);
//++++++++++++++++++++++++++++++++++++++++++=

let userOne ={
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email ="milan@google.com" // access value in object using " . " and then set another value 

console.log(userOne.email);
console.log(userTwo.email);


