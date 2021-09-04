import express from "express";

const app = express();

app.use(express.json());

app.get("/ping", (_, res) => res.json({ pong: true }));

app.listen(process.env.PORT || 3333, () =>
  console.log(`Server is running on port ${process.env.PORT || 3333}`)
);
