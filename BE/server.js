const express = require("express"); //express를 설치했기 때문에 가져올 수 있다.
const logger = require("morgan");
const cors = require("cors");

require("dotenv").config();

const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "https://00c36849.daytiny-real.pages.dev/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use("/api", require("./src"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
