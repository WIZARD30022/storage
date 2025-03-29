
async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        },1000 );
    })    
}

//let a = await sleep()  this and
//let b = await sleep()  this both give error gecause this is put in a async function.

// async function main(){
//     let a = await sleep()  
//     let b = await sleep()
// }  [like this]

(async function main(){
    // let a = await sleep()
    // console.log(a);
    // let b = await sleep()
    // console.log(b);

    // let x, y = [1,5]
    // console.log(x,y)

    // let [x, y] = [1,5]
    // console.log(x,y)

    function sum(a, b, c) {
        return a+b+c ;
    }

    let [x, y, ...rest] = [1,5,7,8,9,10]
    console.log(x,y,rest)

    let obj ={
        a:1,
        b:2,
        c:3
    }
    console.log(obj); // print  all objects as prototype
    let {a,b} = obj;
    console.log(a,b);// print  selected objects as int

    let arr = [1, 2, 5]
    console.log(sum(arr[0],arr[1],arr[2]))
    console.log(sum(...arr))
})()

 