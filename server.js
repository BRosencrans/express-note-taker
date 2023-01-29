//required dependencies
const express = require('express')
const path = require('path')
const fs = require('fs')
//variable to use the express module
const app = express()
//Sets server port 
const PORT = process.env.PORT || 3000

//shows you what port is in use
app.listen(PORT, () => {
    console.log(`Server listening in on http://localhost:${PORT}`)
})