const express = require("express");
const userRoute = require("./Routes/user.routes");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//GET request
app.use("/api/user", userRoute);
// app.use("/register", (req, res) => {
//   //   res.status(200).json({
//   //     message: "I am successfully registered",
//   //     statusCode:200,
//   //   });
//   res.statusCode = 200;
//   res.sendFile(__dirname + "/views/register.html");
// });
// app.use("/login", (req, res) => {
//   //   res.status(200).json({
//   //     message: "I am successfully logged in",
//   //     statusCode: 200,
//   //   });
//   res.cookie("name", "mahfuz");
//   res.cookie("age", "26");
//   //res.clearCookie('name');
//   res.append('id',13000);
//   res.end();
// });

app.get("/", (req, res) => {
  res.send("<h1>I am get request for home route</h1>");
  res.end();
});

//query parameter request
app.get("/student", (req, res) => {
  //   const id = req.query.id;
  //   const name=req.query.name;
  const { name, id } = req.query;
  res.send(`<h1>Student name is: ${name} and id is: ${id}</h1>`);
});
//Route parameter used params
app.get("/userId/:id/userAge/:age", (req, res) => {
  const id = req.params.id;
  const age = req.params.age;
  res.send(`<h1>user id is:${id} and age is:${age}</h1>`);
});
//header parameter request
app.get("/students", (req, res) => {
  const id = req.header("id");
  const name = req.header("name");
  res.send(`student name is:${name} and id is:${id}`);
});
//post request
app.post("/users", (req, res) => {
  const name = req.body.name;
  const age=req.body.age;
  const city=req.body.city;
  res.send(`Welcome to ${name},Your age ${age} and Your city ${city}`);
});

app.use((req, res) => {
  res.send("<h1>404!! Not a valid pages</h1>");
});



module.exports = app;
