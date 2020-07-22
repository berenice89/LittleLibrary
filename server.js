const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());

app.use("/books", require("./routes/books"));

app.listen(5050, () => {
  console.log("API disponible sur localhost:5050");
});
