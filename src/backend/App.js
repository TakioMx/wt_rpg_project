const express = require('express')  // load the node express module
const bp = require('body-parser')
const app = express()  // create a new express app

// let's treat incoming request bodies as text/plain
app.use(bp.text())

// this will catch any incoming request...
app.use((req, res) => {
  console.log([req.method, req.hostname, req.ip, req.url, req.headers])
  console.log(req.query)
  console.log(req.body)
  res.status(200).end()  // sends 200 OK, no body, closes connection
})

// start the webserver, listen on port 3000
app.listen(3000,
  () => console.log('Example app.js listening on port 3000!'))
