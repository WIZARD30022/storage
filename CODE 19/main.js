const express = require('express')
const app = express()
const port = 3001

// https://expressjs.com/en/starter/hello-world.html  --- express 

// https://getbootstrap.com/docs/5.3/components/navbar/ --- bootstrap

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express -- ejs

app.get('/', (req, res) => {
    let siteName = "Adidas"
    let searchtext = "Search Now"
    let arr = ["hi", 10, 23]
  //res.sendfile("templates/index.html" , {root: __dirname})// This res.sendfile is used to send the file on page .
  res.render("index.ejs" , {root: __dirname, siteName: siteName, searchtext: searchtext, arr})
})

app.get('/blog/:slug', (req, res) => {
    let blogname = "Adidas why and what ?"
    let blogcontent = "It is a good brand."
  res.render("blogpost.ejs" , {blogname:blogname,blogcontent:blogcontent})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})