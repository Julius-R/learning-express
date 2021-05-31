const express = require("express");
const app = express();
const PORT = 8080;

// For JSON data with content-type application/json
app.use(express.json());

// For JSON data with content-type application/x-www-form-urlencoded
app.use(express.urlencoded());

// * Request Params

/*
Get request params can be accessed using req.query. You will get an object containing any parameters that are passed when a get request is made. Typically, this looks like the follow: url.com? <- indicates that parameters are going to be passed
url.com?name=Julius <- the format is the paramter name and then value. Multiple parameters can be passed using & 
url.com?name=Julius&title=developer
*/
app.get("/", (req, res) => {
  console.log(req.query); // This will allow us to access the query object
  console.log(req.query.name); // We can access the particular parameter
  res.end();
});

/*
We can send post requests in many different forms, although it is mostly common to expect to see JSON and forms used. In case of JSON, depending on the content-type used, there are middleware functions we can used to access the data.
*/
app.post("/id", (req, res) => {
  console.log(req.body); // Allows us to access the request object
  // But why stop there? Why not send some JSON back? Let's do it!
  res.json({
    status: 200,
    info: "Id Information!",
  });
});

// Named parameter time!
app.get("/user/:name", (req, res) => {
  res.send(req.params.name.toLocaleUpperCase());
});

app.listen(PORT, () =>
  console.log(`Server is up and listening on port ${PORT}`)
);
