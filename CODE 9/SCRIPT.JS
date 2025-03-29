a = 5;
b = 80;
let c = a > b ? (a - b) : (b - a);
console.log(c);

age = 0;
if (age >= 18){
    console.log("You can vote.");
}
else if (age == 0){
    console.log("Please provide correct input.");
}
else {
    console.log("You can vote after",18-age,"years." );
}

for (let I = 50; I < 55; I++) {
    console.log(I)
}

let object = {
    Name : "vinit",
    Role: "Programer",
}
console.log(object)

function greet (name) {
    console.log("Hey",name,"you are nice!")
    console.log("Hey",name,"you are good!")
    console.log("Hey",name,"you are best!")
    console.log("Hey",name,"you are awsome!")
}

greet("vinit sheetal")

function addition (j = 7,k = 8){
    return j+k;
}
result= addition(7,9);
console.log("Your addition ", "is", result ,"." )

const func1 = (x,y)=>{
    console.log(x+y)
}

func1(94,4);