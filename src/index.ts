import express, { Request, Response } from "express";
import referralsRoute from "./routes/referralsRoute";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
const PORT = process.env.PORT;
dotenv.config();
app.use(cors());
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome");
});
app.use("/v1/api/referral", referralsRoute);
app.listen(PORT, () => {
  console.log(`app is listening on port  ${PORT}`);
});
