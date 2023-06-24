const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const logger = require("morgan");
require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/api", require("./src"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
