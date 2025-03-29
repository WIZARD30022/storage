
document.querySelector(".submit-button").addEventListener("click",() => {
    document.querySelector(".submit-button").setAttribute("style","background:aqua; border:2px solid aqua; color: blue; cursor: pointer; padding:2px; margin-left:125px ");
    let send = document.createElement("div");
    send.innerHTML= "<b>CONFIRMATION</b> Email is send on your provided Email Id. Please confirm your identity.";
    document.querySelector(".send").append(send);
    send.className="send";
    document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3);  padding:5px;  ");
    setTimeout(() => {
        document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px; opacity: 0.9; ");
    }, 10000);
    setTimeout(() => {
        document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px; opacity: 0.8; ");
    }, 11000);
    setTimeout(() => {
        document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px; opacity: 0.7; ");
    }, 12000);
    setTimeout(() => {
        document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px; opacity: 0.6; ");
    }, 13000);
    setTimeout(() => {
        document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px; opacity: 0.5; ");
    }, 14000);
    setTimeout(() => {
        send.remove();
        document.querySelector(".send").setAttribute("style"," ");
        document.querySelector(".submit-button").setAttribute("style","background:blue; border:2px solid black; color: white; cursor: pointer; padding:2px; margin-left:125px");
    }, 15000);
});

if (localStorage.getItem("name")) {
    console.log(localStorage.getItem("name"))
} else {
    let a = prompt("Enter your name");
    localStorage.setItem("name",a)
    console.log(localStorage.getItem("name"))
}