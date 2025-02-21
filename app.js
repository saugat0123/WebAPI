//handlers - hbs
//npm i hbs
const path = require('path');
const express = require('express');
const hbs = require('hbs');
const { doesNotReject } = require('assert');
const app = express();


const publicDirectory = path.join(__dirname, 'public'); //root of our project
app.use(express.static(publicDirectory))

const partials = path.join(__dirname, '/views/partials');
hbs.registerPartials(partials);

app.set('view engine', 'hbs'); // we are using hbs as our template

app.get('/contact', function(req,res){
    res.render('contact', {user: "Saugat"})
})

app.get('/', function(req,res){
    res.render('index')
})

app.get('/elements', function(req,res){
    res.render('elements')
})

app.listen(90)


app.get('/contact', function(req, res){
    res.send("Hello world!!")
})

app.get('/about', function(req,res){
    res.send("About us Page ");
})

// app.get('/',function(req, res){
//     res.sendFile(__dirname + '/home.html')
// })

app.get('/student/:username', function(req,res){
    res.send(req.params.username)
}) 

app.get('/user/:batch/:student/:id', function(req,res){
    const batch = req.para7ms.batch
    const student = req.params.student
    const id = req.params.id
    res.send("Hello "+ student+ " You are from "+batch+ " Your ID is "+id)
})

app.get('/products',function(req, res){
    res.sendFile(__dirname + '/products.html')
})



app.get('/gallery',function(req, res){
    res.sendFile(__dirname + '/gallery.html')
})

app.get('/about', function(req, res){
    res.sendFile(`${__dirname}/about.html`)
})



