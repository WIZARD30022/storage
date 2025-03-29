// let a = prompt("Enter first number");
// let b = prompt("Enter second number");
// if (isNaN(a) || isNaN(b)){
//     throw SyntaxError("not allowed.")
// }
// let c = parseInt(a) + parseInt(b) ;
// try {
//     console.log("The sum is",c)
// } catch (error) {
//     console.log("not possible.")
// }
// finally{
//     console.log("files are completed.")
// }

// function main(){
//     try {
//         console.log("The sum is",c)
//         return true
//     } catch (error) {
//         console.log("not possible.")
//         return false
//     }
//     finally{
//         console.log("files are completed.")
//     }
// }

// main()

// let obj = {
//     a:1,
//     b:"gf"
// }

// console.log(obj)

// let animal = {
//     eat : true
// }
// let rabbit = {
//     jump : true
// }

// rabbit.__proto__ = animal;

class animal{
    constructor(name){
        this.name = name
        console.log("Object is created...")
    }
    eats(){
        console.log("eating");
    }
    jump(){
        console.log("jumping")
    }
    run(){
        console.log("running")
    }
}

class lion extends animal{
    constructor(name){
        super(name);
        console.log("lion Object is created...")
    }
    eats(){
        console.log("eating meat");
    }
    jump(){
        super.jump();
        console.log("higher jumping");
    }
}

let a = new animal("bunny");
console.log(a);

let l = new lion("sher");
console.log(l);

// class User{
//     constructor(name){
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     } 

//     set name(value){
//         if (value.lenght < 4) {
//             console.log("Name is short.");
//             return;
//         }
//     }
// }

// let user = new User("john");
// console.log(user.name);

// user = new User ("");

console.log(l instanceof lion);
console.log(a instanceof lion);
console.log(l instanceof animal);