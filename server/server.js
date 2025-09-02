//import express and cors
import express from "express"; //Es6 syntax
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json()); //use Json to manipulate data

//set up port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`server is running in port ${PORT}`);
});

//set up root route

app.get("/", function (req, res) {
  res.json({ message: "welcome to the server." });
});
