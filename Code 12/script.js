var button = document.getElementById("btn")

button.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML = "<h2>Hey i am a class heading.</h2>"
})

button.addEventListener("dblclick",()=>{
    document.querySelector(".box").innerHTML = "<h2>Hey i am a class heading by dobule click.</h2>"
})

button.addEventListener("contetmenu",()=>{
    document.querySelector(".box").innerHTML = "<h2>Hey i am a class heading.</h2>"
})

button.addEventListener("keydown",(e)=>{
    console.log(e.key , e.keyCode)
})

document.querySelector(".container").addEventListener("click",(e)=>{
    alert("container")
    e.stopPropagation()
})

document.querySelector(".childcontainer").addEventListener("click",(e)=>{
    alert("childcontainer")
    e.stopPropagation()
})

document.querySelector(".child").addEventListener("click",(e)=>{
    alert("child")
})

function randomcolour(){
    let val1= Math.ceil(0+ Math.random()*255);
    let val2= Math.ceil(0+ Math.random()*255);
    let val3= Math.ceil(0+ Math.random()*255);
    return `rgb(${val1}, ${val2}, ${val3})`
}

setInterval(() => {
    document.querySelector(".child").style.background = randomcolour();
    console.log(randomcolour());
}, 1000);
/*---------------------------------------------------------------------*/
console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})
/*---------------------------------------------------------------------*/
console.log("Harry is a hacker")
console.log("Rohan is a hecker")


setTimeout(() => {
    console.log("I am inside settimeout")
}, 0);

setTimeout(() => {
    console.log("I am inside settimeout 2")
}, 0);

console.log("The End")

const fn = () => {
  console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )
