


console.log(document.querySelector("#search1 button").className)

const change_theme = () => {
    var currentclass = document.querySelector("body").className;
    document.querySelector("body").className = currentclass == "light-theme" ? "dark-theme" : "light-theme";

    var searchdivdarkcurrentclass = document.querySelector("#search_div5").className;
    document.querySelector("#search_div5").className = searchdivdarkcurrentclass == "search_div-light" ? "search_div-dark" : "search_div-light";

    var listsearchlightcurrentclass = document.querySelector("#search3").className;
    document.querySelector("#search3").className = listsearchlightcurrentclass == "list-search-light" ? "list-search-dark" : "list-search-light";
}



console.log(document.querySelector("#logo3 button").outerHTML)
console.log(document.querySelector("input.search").addEventListener("input", document.querySelector("input.search").nodeValue))

const change_icon = () =>  {
    if (document.querySelector("#logo3 button").className == "button_nav_light"){
        document.querySelector("#logo3 button").outerHTML = '<button type="button" class="button_nav_dark"> <img src="logo2-dark.jpg" alt="" /> </button>';
        console.log(document.querySelector("#logo3 button").className)
    }

    else if (document.querySelector("#logo3 button").className == "button_nav_dark") {
        document.querySelector("#logo3 button").outerHTML = '<button type="button" class="button_nav_light"> <img src="logo2.jpg" alt="" /> </button>';
        console.log(document.querySelector("#logo3 button").className)
    }
    
    if (document.querySelector("#logo4 button").className == "button_nav_light"){
        document.querySelector("#logo4 button").outerHTML = '<button type="button" class="button_nav_dark"> <img src="logo3-dark.jpg" alt="" /> </button>';
        console.log(document.querySelector("#logo4 button").className)
    }

    else if (document.querySelector("#logo4 button").className == "button_nav_dark"){
        document.querySelector("#logo4 button").outerHTML = '<button type="button" class="button_nav_light"> <img  src="logo3.jpg" alt="" /> </button>';
        console.log(document.querySelector("#logo4 button").className)
    }

    if (document.querySelector("#logo5 button").className == "button_nav_light"){
        document.querySelector("#logo5 button").outerHTML = '<button type="button" class="button_nav_dark" onclick=" change_theme(),change_icon() "><img style="height: 38px" src="theme-mode-light.jpg" alt="" /></button>';
        console.log(document.querySelector("#logo5 button").className)
    }

    else if (document.querySelector("#logo5 button").className == "button_nav_dark"){
        document.querySelector("#logo5 button").outerHTML = '<button type="button" class="button_nav_light" onclick=" change_theme(),change_icon() "> <img style="height: 38px" src="theme-mode.jpg" alt="" /> </button>';
        console.log(document.querySelector("#logo5 button").className)
    }

    if (document.querySelector("#search1 button").className == "span-search-light"){
        document.querySelector("#search1 button").outerHTML = '<button onclick="extend()" class="span-search-dark" style="height: 40px; width: 48px; border : none;" ><img style="height: 40px; width: 48px;" src="logo5-dark.jpg" alt=""></button></li>'
        console.log(document.querySelector("#search1 button").className)
    }

    else if (document.querySelector("#search1 button").className == "span-search-dark"){
        document.querySelector("#search1 button").outerHTML = '<button onclick="extend()" class="span-search-light" style="height: 40px; width: 48px; border : none;" ><img style="height: 40px; width: 48px;" src="logo5.jpg" alt=""></button></li>';
        console.log(document.querySelector("#search1 button").className)
    }

    if(document.querySelector("#search4").className == "list-search-bar-light"){
        document.querySelector("#search4").outerHTML = ' <button class="list-search-bar-dark" id ="search4"><img src="logo4-dark.jpg" alt=""></button> ';
        console.log(document.querySelector("#search4").className)
    }
    else if (document.querySelector("#search4").className == "list-search-bar-dark"){
        document.querySelector("#search4").outerHTML = ' <button class="list-search-bar-light" id ="search4"><img src="logo4.jpg" alt=""></button> ';
        console.log(document.querySelector("#search4").className)
    }

    if(document.querySelector("#search5").className == "list-search-bar-light"){
        document.querySelector("#search5").outerHTML = ' <li class="list-search-bar-dark" id="search5"><img style="margin-right: 350px ; margin: 6px;" src="logo6-dark.jpg" alt=""></li> ';
        console.log(document.querySelector("#search5").className)
    }
    else if (document.querySelector("#search5").className == "list-search-bar-dark"){
        document.querySelector("#search5").outerHTML = ' <li class="list-search-bar-light" id="search5"><img style="margin-right: 350px ; margin: 6px;" src="logo6.jpg" alt=""></li> ';
        console.log(document.querySelector("#search5").className)
    }


}





const extend = () => {

    

    if(document.querySelector("#extend-div5").className == "extend-div"){
        document.querySelector("#extend-div5").outerHTML = '<div class="extend-di" id="extend-div5" style= "padding-top:40px;" > <div class= "created" id="created5" > <div class="items" style= "display:flex; flex-direction:column;align-items: center;"><img src="homelogo2.jpg" alt="" style="height:25px;width:25px;"><button class="created5-button1" style="cursor: pointer;" onclick="home()" >Home</button></div> <div class="items"style= "display:flex; flex-direction:column;align-items: center;"><img src="shortslogo.jpg" alt="" style="height:25px;width:50px;"><button class="created5-button2" onclick="shorts()" >Shorts</button></div> <div class="items"style= "display:flex; flex-direction:column;align-items: center;"><img src="subscriptionslogo.jpg" alt="" style="height:30px;width:30px;"><button class="created5-button3" style="cursor: pointer; "onclick="Subscription()">Subscription</button></div> <div class="items" style= "display:flex; flex-direction:column;align-items: center;"><img src="downloadlogo.jpg" alt="" style="height:30px;width:30px;"><button class="created5-button4" style="cursor: pointer;" onclick="Download()">Download</button></div> <div class="items"style= "display:flex; flex-direction:column;align-items: center;"><img src="accountlogo.jpg" alt="" style="height:25px;width:25px;"><button class="created5-button5" style="cursor: pointer;" onclick="Account()">Account</button></div> </div> </div> </div>';
        document.querySelector("#created5").setAttribute("style","animation: left-animation 2s cubic-bezier(0.02, 1.35, 0, 1.32) ; width: 140px;margin: 5px;display: flex;flex-direction: column;gap: 25px;background-color: red;height: 620px;justify-content: flex-start;padding-left: 0px;padding-top: 18px; align-items: center;");
        document.querySelector(".created5-button1").setAttribute("style","background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800; border:red;");
        document.querySelector(".created5-button2").setAttribute("style","background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800; border:red;");
        document.querySelector(".created5-button3").setAttribute("style","background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800; border:red;");
        document.querySelector(".created5-button4").setAttribute("style","background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800; border:red;");
        document.querySelector(".created5-button5").setAttribute("style","background-color: red;font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;font-weight: 800; border:red;");
    }

    else if (document.querySelector("#extend-div5").className == "extend-di"){
        
        document.querySelector("#extend-div5").outerHTML = '<div class="extend-div" id="extend-div5"> <div>  </div> </div>';
    }
}

function home() {
    window.location.href = "index.html" ;
}

function shorts() {
    window.location.href = "shorts.html" ;
}

function Subscription() {
    window.location.href = "Subscription.html" ;
}

function Download() {
    window.location.href = "Download.html" ;
}

function Account() {
    window.location.href = "Account.html" ;
}

