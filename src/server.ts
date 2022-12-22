import express, { urlencoded } from "express";
import logger from "morgan";
import helmet from "helmet";
import httpProxy from "express-http-proxy";

const app = express();

app.use(logger("dev"));
app.use(helmet());
app.use(express.json());
app.use(urlencoded({ extended: true }));

app.get("/", (req, res) => {
  return res.json({ message: "Api Rodando" });
});

app.use("/user", httpProxy("http://localhost:5000", { timeout: 3000 }));

app.listen(3000, () => console.log("Aplication is Init.. 🔥"));
