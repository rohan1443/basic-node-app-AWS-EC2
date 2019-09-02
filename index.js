var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send("Hello Rohan")
})

app.listen(process.env.PORT ||3000, () => console.log("Server running in port 3000"))

module.exports = app