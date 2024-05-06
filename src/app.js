import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();

// esperando um evento de conexão do tipo error
conexao.on("error", (erro) => {
  console.error("Erro de conexão: ", erro);
});

// quando a conexão der certo entre o servidor e o banco de dados
conexao.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso!");
});

const app = express();

routes(app);

export default app;
