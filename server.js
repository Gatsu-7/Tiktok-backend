import express from "express";
import mongoose from "mongoose";
import data from "./data.js";
import Videos from "./dbModel.js";
const app = express();
const connection_url = `mongodb+srv://satysat03:ltcEqvv26yV4h2vY@cluster0.tlu5xeq.mongodb.net/tiktokdb?retryWrites=true&w=majority&appName=Cluster0`;
const port = process.env.port || 3001;

app.use(express.json());

mongoose
  .connect(connection_url, {})
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log("MongoDB connection error: ", err));

app.get("/", (req, res) => {
  res.status(200).send("hello world");
});

app.get("/v1/posts", (req, res) => {
  res.status(200).send(data);
});

app.get("/v2/posts", async (req, res) => {
  try {
    const data = await Videos.find();
    res.status(200).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post("/v2/posts", async (req, res) => {
  const dbVideos = req.body;
  try {
    const newVideo = Videos.create(dbVideos);
    res.status(201).send(newVideo);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
