const connectToMongo = require("./db");
const express = require("express");
//cors required
const cors = require('cors')

connectToMongo();

const app = express();
const port = 5000;

//cors syntax placed
app.use(cors())

app.use(express.json());//middleware

app.get("/", (req, res) => {
  res.send("Hello ADARSH this is backend");
});

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`INoteBOOK ==> listening at http://localhost:${port}`);
});
