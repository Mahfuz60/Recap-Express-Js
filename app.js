const express = require("express");
const app = express();

//GET request(collect the data server to client site)
app.get("/", (req, res) => {
  res.send("I am get request at home route");
});

app.get("/about", (req, res) => {
  res.send("I am get request at about route");
});

//POST request(any client data store to database)
app.post("/", (req, res) => {
  res.send("I am post request at home route");
});
app.post("/about", (req, res) => {
  res.send("I am post request at about route");
});

//PUT request(update the client data)
app.put("/", (req, res) => {
  res.send("I am Put request at home route");
});
app.put("/about", (req, res) => {
  res.send("I am put request for about route");
});

//DELETE request(delete the any client data)
app.delete("/", (req, res) => {
  res.send("I am delete request for home route");
});
app.delete("/about", (req, res) => {
  res.send("I am delete request for about route");
});

module.exports = app;
