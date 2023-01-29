//required dependencies
const express = require('express')
const path = require('path')
const fs = require('fs')
//variable to use the express module
const app = express()
//Sets server port 
const PORT = process.env.PORT || 3000

//allows express to parse asset data for the server
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//server route to the main page
app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(path.join(__dirname, 'public/index.html'))
})
//server route to the notes.html
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'))
})
//server route to the db.json so all the note data can be read
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'db/db.json'))
})

//express function that allows a new note to be created and stored in the db.json and displayed to end user
app.post("/api/notes", (req, res) => {
    const newText= req.body;
    const textList = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
    
    //writes and pushes note data to db.json
    textList.push(newText);
    fs.writeFileSync("./db/db.json", JSON.stringify(textList));
    res.json(textList);
})

//shows you what port is in use
app.listen(PORT, () => {
    console.log(`Server listening in on http://localhost:${PORT}`)
})