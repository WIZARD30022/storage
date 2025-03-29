let alert_sign = confirm("Please sign in for better experience.");


if ( localStorage.getItem("alert_sign2") == 'true' || alert_sign ) {
    var alert_sign1 = alert_sign.valueOf();
    console.log(alert_sign1);
    localStorage.setItem("alert_sign2",alert_sign1);
    alert_sign = "";

} else {
    var alert_sign1 = alert_sign.valueOf();
    console.log(alert_sign1);
    localStorage.setItem("alert_sign2",alert_sign1);
    alert_sign = confirm("Please sign in for better experience.");
}

const recommendation_change_theme = () =>  {
    var recommendation11currentclass = document.querySelector("#recommendation-bar21").className;
    document.querySelector("#recommendation-bar21").className = recommendation11currentclass == "recommendation-bar11-light" ? "recommendation-bar11-dark" : "recommendation-bar11-light";

    var recommendation11currentclass = document.querySelector("#recommendation-bar22").className;
    document.querySelector("#recommendation-bar22").className = recommendation11currentclass == "recommendation-bar12-light" ? "recommendation-bar12-dark" : "recommendation-bar12-light";

    var recommendation11currentclass = document.querySelector("#recommendation-bar23").className;
    document.querySelector("#recommendation-bar23").className = recommendation11currentclass == "recommendation-bar13-light" ? "recommendation-bar13-dark" : "recommendation-bar13-light";

    var recommendation11currentclass = document.querySelector("#recommendation-bar24").className;
    document.querySelector("#recommendation-bar24").className = recommendation11currentclass == "recommendation-bar14-light" ? "recommendation-bar14-dark" : "recommendation-bar14-light";

   
}