const express = require('express')
const app = express()
PORT = 8080

app.use(express.static("public"));

// 99 bottles and 99 bugs

app.get("/", (req, res) => {
    res.send(`
    <link rel="stylesheet" type="text/css"   href="/css/main.css">
   <div id="bottle">
    <h1>
    99 Bottles of beer on the wall
    <p>
    <a href ='/98'>
    take one down, pass it around
    </a>
    </p>
    </h1>
    </div>

    <div  id="bug">
    <h1>
    99 bugs in the code
    <p>
    <a href ='/bugs/98'>
    take one down, pass it around
    </a>
    </p>
    </h1>
    </div>
    `);
})

//98 bottles after you press the link

app.get(`/:number`, (req, res) => {
    let number_of_bottles = req.params.number
    if (number_of_bottles > 0) {
        res.send(`
        <link rel="stylesheet" type="text/css"   href="/css/main.css">
       <div id="bottle">
    <h1>${number_of_bottles} Bottles of beer on the wall
    <p>
    <a href = '/${number_of_bottles - 1}'>
    take one down, pass it around
    </a>
    </p>
    </h1>
    </div>
    `);
    } else if (req.params.number <= 0) {
        res.send(`
        <link rel = "stylesheet" type="text/css" href="/css/main.css">
        <div id="start">
        <h1>0 Bottles of beer on the wall
        <p><a href = '/'>
        Start over</a></p>
        </h1>
        </div>
        `);
    }
})



//98 bugs after pressing the link

app.get(`/bugs/:number`, (req, res) => {
    let number_of_bugs = req.params.number
    if (number_of_bugs > 0) {
        res.send(`
        <link rel="stylesheet" type="text/css" href="/css/main.css">
       <div id="bug">
    <h1>${number_of_bugs} little bugs
    <p>
    <a href = '/bugs/${Math.floor(Math.random() * number_of_bugs + 40)}'>
    take one down, pass it around
    </a>
    </p>
    </h1>
    </div>
    `);
    } else if (req.params.number <= 0) {
        res.send(`
        <link rel = "stylesheet" type="text/css" href="/css/main.css">
        <div id="start">
        <h1>0 bugs in the code
        <p><a href = '/'>
        Start over</a></p>
        </h1>
        </div>
        `);
    }
})


app.listen(PORT, (req, res) => {
    console.log("Listening port 8080")
})

