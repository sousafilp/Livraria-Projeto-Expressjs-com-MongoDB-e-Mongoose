// import http from "http";
import "dotenv/config";
import app from "./src/app.js";

app.listen(process.env.PORT, () => {
  console.log(`Servidor escutando na porta ${process.env.PORT}!`);
});
