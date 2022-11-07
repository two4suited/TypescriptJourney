import { peopleRouter } from "./people.router";
import express from "express";

const PORT: number = 3000
const app = express();

app.use(express.json())
app.use("/api/people",peopleRouter);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });