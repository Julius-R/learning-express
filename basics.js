// Imports express
const express = require("express");
// Instantiates our application
const app = express();
// We can optionally define a port
const PORT = 8080;

/*
We can listen to requests using express. 
app.Method(<Path>,<Handler>)
There is a method available for each HTTP method
The path is the path on the server, ex: '/',  '/user', '/payment'
Handler is a function that is executed when the route is matched
*/
app.get("/", (req, res) => {
  /*
    We can send responses back to the client within here!
    Responses can be anything from strings to json, to html
    We can do so with res.send()
    Additionally, an empty response can be sent with res.end()
    */
  res.send("World of Hello!");
});

// We can send the HTTP response status as well
app.get("/status", (req, res) => {
  res.status(404).send("Hyrule needs you!");
  //   res.sendStatus(400) shorthand
});

// We can also send JSON!
app.get("/json", (req, res) => {
  res.json({ uuid: "4295-25BRD" });
});

// Redirect
app.get("/redir", (req, res) => {
  // You can specify where to redirect the client to
  res.redirect("/");
});

// Starts our server on a specified port, can pass a callback function that will get called when the server accepts new requests
app.listen(PORT, () =>
  console.log(`Server is up and listening on port ${PORT}`)
);
