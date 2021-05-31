const express = require("express");
const app = express();
const PORT = 8080;

/* 
Templating allows us to add data to a view and generate html in a dynamic way. There are many types of templates we can use like ember, pug, handlebars, etc.
*/

// This line lets us use pug as our view engine
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(PORT, () =>
  console.log(`Server is up and listening on port ${PORT}`)
);
