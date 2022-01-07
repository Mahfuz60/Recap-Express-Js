const express = require("express");
const router = express.Router();

//GET request(collect the data server to client site)

router.get("/register", (req, res) => {
  res.send("<h1>I am get request for register route</h1>");
  res.end();
});
router.get("/login", (req, res) => {
  res.send("<h1>I am get request for login route</h1>");
  res.end();
});
//POST request(any client data store to database)
// app.post("/", (req, res) => {
//   res.send("I am post request at home route");
//   res.end();
// });
// app.post("/about", (req, res) => {
//   res.send("I am post request at about route");
//   res.end();

// });

//PUT request(update the client data)
// app.put("/", (req, res) => {
//   res.send("I am Put request at home route");
//   res.end();
// });
// app.put("/about", (req, res) => {
//   res.send("I am put request for about route");
//   res.end();
// });

//DELETE request(delete the any client data)
// app.delete("/", (req, res) => {
//   res.send("I am delete request for home route");
//   res.end();
// });
// app.delete("/about", (req, res) => {
//   res.send("I am delete request for about route");
//   res.end();
// });

module.exports = router;
