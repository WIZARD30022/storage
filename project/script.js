let initializing = document.createElement("div");
document.querySelector(".body").append(initializing);
let i = "----Initializing hacking";

let Reading = document.createElement("div");
document.querySelector(".body").append(Reading);
let r = "---------Reading your files";

let Passward = document.createElement("div");
document.querySelector(".body").append(Passward);
let p = "-----------Passward files detected";

let Sending = document.createElement("div");
document.querySelector(".body").append(Sending);
let s = "-------------------Sending all personal files and passward to server";

let Cleaning = document.createElement("div");
document.querySelector(".body").append(Cleaning);
let c = "------------------------------Cleaning up";

var a = Math.ceil(0+ Math.random()*10000);
console.log(a);
var b = Math.ceil(0+ Math.random()*1000) + a;
console.log(b);
var e = Math.ceil(0+ Math.random()*1000) + b;
console.log(e);
var d = Math.ceil(0+ Math.random()*1000) + e;
console.log(d);


function initial() {
    setTimeout(() => {
        initializing.innerHTML = `<span> ` + i + ` </span>`;
    }, a);

    setTimeout(() => {
        initializing.innerHTML = `<span> ` + i + `. </span>`;
    }, b);

    setTimeout(() => {
        initializing.innerHTML = `<span> ` + i + `.. </span>`;
    }, e);

    setTimeout(() => {
        initializing.innerHTML = `<span> ` + i + `... ------------</span><div>|</div>`;
    }, d);
}


function read() {
    setTimeout(() => {
        Reading.innerHTML = `<span> ` + r + ` </span><div>|</div><div>|</div>`;
    }, a+a );

    setTimeout(() => {
        Reading.innerHTML = `<span> ` + r + `. </span><div>|</div><div>|</div>`;
    }, b+b);

    setTimeout(() => {
        Reading.innerHTML = `<span> ` + r + `.. </span><div>|</div><div>|</div>`;
    }, e+e);

    setTimeout(() => {
        Reading.innerHTML = `<span></span><div>|</div><div>|</div><div>|</div><div>|</div>` + r + `...--------- `;
    }, d+d);
}



function pass() {
    setTimeout(() => {
        Passward.innerHTML = `<span> `+p+` </span><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, a+a+a);
    
    setTimeout(() => {
        Passward.innerHTML = `<span> `+p+`. </span><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, b+b+b);
    
    setTimeout(() => {
        Passward.innerHTML = `<span> `+p+`.. </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, e+e+e);
    
    setTimeout(() => {
        Passward.innerHTML = `<span>  </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`+p+`...-----------------`;
    }, d+d+d);
    
}



function send() {
    setTimeout(() => {
        Sending.innerHTML = `<span> `+s+` </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, a+a+a+a);
    
    setTimeout(() => {
        Sending.innerHTML = `<span> `+s+`. </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, b+b+b+b);
    
    setTimeout(() => {
        Sending.innerHTML = `<span> `+s+`.. </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, e+e+e+e);
    
    setTimeout(() => {
        Sending.innerHTML = `<span> `+s+`...------------------ </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, d+d+d+d);
    
}



function  clean() {
    setTimeout(() => {
        Cleaning.innerHTML = `<span> `+c+` </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, a+a+a+a+a);
    
    setTimeout(() => {
        Cleaning.innerHTML = `<span> `+c+`. </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, b+b+b+b+b);
    
    setTimeout(() => {
        Cleaning.innerHTML = `<span> `+c+`.. </span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div>`;
    }, e+e+e+e+e);
    
    setTimeout(() => {
        Cleaning.innerHTML = `<span> `+c+`... -----------------------------</span><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>|</div><div>-----Process completed-----</div>`;
    }, d+d+d+d+d);
    
}


initial()
read()
pass()
send()
clean()
