import express from "express";
import appRoutes from "./routes/routes.js";
import { requestLogger } from "./middlewares/logger.middleware.js";

const app = express();
const port = 5000;

app.use(express.json());
app.use(appRoutes);
app.use(requestLogger);


app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

