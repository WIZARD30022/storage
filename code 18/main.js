const express = require('express')
const blog = require('./routes/blog')
const shop = require('./routes/shop')
const fs = require('fs')

const app = express()
const port = 3000

app.use(express.static('public'))
// use this code to provide any file or document public by creating a folder named "public" and put all publical files and documents inn this folder.
app.use('/blog', blog)
app.use('/shop', shop)

app.use((req, res, next) => {
  console.log("m1")
  // res.send("Hacked ___ _  _ _ _ __")
  // as response is already send thats why next is not written
  next() // this next function is important as it is a part of the syntax without this next function the web is start to waiting for response

})

app.use((req, res, next) => {
  console.log(req.headers)
  req.harry = 56;
  fs.appendFileSync("logs.txt", `${Date.now()} is a ${req.method}\n`)
  console.log(`${Date.now()} is a ${req.method}`)
  next()
})

// app.get or app.post or app.put or app.delete (path , handler)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/blog/:slug',(req,res) => {
  // logic to fetch {slug} from the database
  // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
  console.log(req.params) //will output { slug: "intro-to-padosi"}
  console.log(req.query) //will output { mode: "dark" , regoin: "in" }
  res.send(`hello ${req.params.slug} and ${req.params.second}`)
})
app.get('/contact', (req, res) => {
  //logic to fetch intro to js from the database
  res.send('Hello contact!')
})
app.get('/blog', (req, res) => {
  res.send('Hello blog!')
})
app.get('/about us', (req, res) => {
  res.send('Hello about us!')
  // This send in used to send the text on page
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post('/', (req, res) => {
  console.log("hello its a post")
})

app.get("/index", (req, res) => {
  console.log("hello its a index")
  res.sendFile('templates/index.html', {root: __dirname})
})
// This sendfile is used to send file on page and put path on '' and  provide root or compleate path

app.get('/api', (req, res) => {
  console.log("hello its a api")
  res.json({"a":1 ,"b":2 , "c":3 , "d":4 })
})