import express from "express";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static(__dirname + "/dist"));

app.get("*", (req, res) => res.sendFile(__dirname + "/dist/index.html"));

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Server is running on port ${PORT}`);
});
