const express = require('express')
const mongoose = require('mongoose')
const Employes = require("./model/employes")
const app = express()
const port = 3000

mongoose.connect('mongodb://127.0.0.1:27017/company')

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { foo: 'FOO' });
});

const RandomNum = (arr) => {
  let Num = Math.floor(Math.random() * (arr.length - 1))
  return arr[Num];
}

let name=["Vijay", "Prakash", "Rohit", "Manju"];
let language=["java", "python", "C", "Php"];
let city=["Delhi", "Mumbai", "Hydrabad", "kolokata"];

app.get('/generate', async(req, res) => {

  await Employes.deleteMany({})

  for (let index = 0; index < 11; index++) {
    let e = await Employes.create({
      name: RandomNum[name],
      salary: Math.floor(Math.random()*22000),
      language: RandomNum[language],
      city: RandomNum[city],
      IsManager: (Math.random > 0.5)? true : false
    })
  }

  // await e.save()

  res.render('index', { foo: 'FOO' });
});

// app.get('/', (req, res) => {
//   res.sendfile("router/my.html", {root: __dirname})
//   res.sendfile("router/script.js", {root: __dirname})
// })

app.listen(port, () => {
  console.log(`Website is started on localhost at port ${port}`)
})