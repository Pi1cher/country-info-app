import cors from "cors";
import express from "express";

import { config } from "./configs/configs";
import { countryRouter } from "./routers/country.router";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/", countryRouter);

app.listen(config.APP_PORT || 3001, async () => {
  console.log(`Server has started on PORT ${config.APP_PORT}`);
});
