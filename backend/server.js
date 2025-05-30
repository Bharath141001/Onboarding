const express = require("express");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const app = express();
const PORT = 4000;

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "Assets")));

app.get("/api/quick-links", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "quickLink.json"));
  res.json(JSON.parse(data));
});

app.get("/api/team-data", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "teamData.json"));
  res.json(JSON.parse(data));
});

app.get("/api/build", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "buildSteps.json"));
  res.json(JSON.parse(data));
});

app.get("/api/docs-data", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "docsData.json"));
  res.json(JSON.parse(data));
});

app.get("/api/faq-data", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "faqData.json"));
  res.json(JSON.parse(data));
});

app.get("/api/train-video", (req, res) => {
  const data = fs.readFileSync(path.join(__dirname, "data", "trainVideo.json"));
  res.json(JSON.parse(data));
});


app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
