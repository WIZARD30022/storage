
document.querySelector(".submit-button").addEventListener("click",() => {
    document.querySelector(".submit-button").setAttribute("style","background:aqua; border:2px solid aqua; color: blue; cursor: pointer; padding:2px; margin-left:25px ");
    let send = document.createElement("div");
    send.innerHTML= "<b>CONFIRMATION</b> Email is send on your provided Email Id. Please confirm your identity.";
    document.querySelector(".send").append(send);
    send.className="send";
    document.querySelector(".send").setAttribute("style"," background:rgb(241 140 140); border:2px solid rgb(250, 3, 3); color: rgb(250, 3, 3); position: relative; left:-135px ; top:15px; padding:5px;  ");
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
        document.querySelector(".submit-button").setAttribute("style","background:blue; border:2px solid black; color: white; cursor: pointer; padding:2px; margin-left:25px");
    }, 15000);
});

const submit = () =>{
    // document.querySelector(".username-input").addEventListener("input",(a)=>{
    //     console.log(a);
    // })

    let mail = document.querySelector(".Emailid-input").value
    console.log(document.querySelector(".username-input").value)
    console.log(mail)
    console.log(document.querySelector(".passward-input").value)

    
    // const recipient = `${mail}`;
    // const subject = 'Hello';
    // const body = 'This is the body of the email.';

    // const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // window.location.href = mailtoLink;
}

const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };
  
  document
    .querySelector("form")
    .addEventListener("submit", handleSubmit);

// const array = [0,0,0,0];
// console.log(array);
// // array.fill("hi",0,1);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index]= a;
    
// }
// console.log(array);