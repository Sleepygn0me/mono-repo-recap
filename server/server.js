//import express and cors
import express from "express"; //Es6 syntax
import cors from "cors";

//initilise express
const app = express();

//use express and cors
app.use(cors());
app.use(express.json()); //use Json to manipulate data

//set up port
const PORT = 8080;
app.listen(PORT, function () {
  console.info(`server is running in port ${PORT}`);
});

//set up root route
//TODO: Read data in this route
app.get("/", function (req, res) {
  res.json({ message: "welcome tot the server. GET comfy" });
});
