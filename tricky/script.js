// Gryffindor - length less than 6
// Hufflepuff - length less than 8
// Ravenclaw  - length less than 12
// Slytherinn - length 12 or more

let array = ["deepak" , "pratik" , "vinay" , "prashant" , "vijay" , "rahul" , "yash" , "gautam" , "deevainder"," utakarsh "," upamannu" , "pratayaksha "]

array.forEach(element => {
    let length = element.length;
    console.log(length);

    if (length > 6) {
        console.log(element + "- Gryffindor")
    } 
    if (length > 8) {
        console.log(element + "- Hufflepuff")
    }
    if (length > 12) {
        console.log(element+ "- Ravenclaw")
    }
    else {
        console.log(element+ "- Slytherinn")
    }
});