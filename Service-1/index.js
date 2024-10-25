const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

if (process.env.SECRET !== "SERVICE-1-SECRET") {
  console.error("Invalid secret key");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.json({
    message: "Service 1",
  });
});

app.get("/health", (req, res) => {
  res.json({
    service: "Service 1",
    status: "UP",
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Service 1 is running on port ${process.env.PORT}`);
});
