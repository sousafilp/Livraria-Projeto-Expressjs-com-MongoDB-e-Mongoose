import express from "express";
import livros from "./livrosRoutes.js";

// arquivo central das rotas. Como vai ter diferentes objetos no decorrer do projeto esse arquivo junta todas as rotas e manda elas para o app.js
// está usando uma instância do express como argumento
const routes = (app) => {
  // aqui é para renderizar a página raiz do site
  app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"));

  // aqui está usando um middleware para fazer o tratamento de objetos javascript
  // está também utilizando todas as rotas que foram importadas no caso a rota "livros"
  // use é para usar middlewares
  app.use(express.json(), livros);
};

export default routes;
