//---------------------------------------------------------------
//this line imports rxpress
const express = require("express");
//this line sets express as app
const app = express();
//---------------------------------------------------------------


//---------------------------------------------------------------
//mongo is made a function in db file and sent here as a function ,running it
const connectToMongo = require("./db");
connectToMongo();
//---------------------------------------------------------------



//---------------------------------------------------------------
//cors required
const cors = require("cors");
//cors syntax placed
app.use(cors());
//---------------------------------------------------------------


//---------------------------------------------------------------
//necessary to use json as CRUD operators
app.use(express.json()); //middleware
//---------------------------------------------------------------


//---------------------------------------------------------------
//this is direct endpoint
app.get("/", (req, res) => {
  res.send("Hello ADARSH this is backend");
});
//---------------------------------------------------------------


//--------------------------------------------------------------
//this is routing
const auth = require("./routes/auth");
app.use("/api/auth", auth);
// app.use("/api/auth", require("./routes/auth"));

app.use("/api/notes", require("./routes/notes"));
//--------------------------------------------------------------


//--------------------------------------------------------------
//port listing and using
const port = 5000;
app.listen(port, () => {
  console.log(`INoteBOOK ==> listening at http://localhost:${port}`);
});
//--------------------------------------------------------------
