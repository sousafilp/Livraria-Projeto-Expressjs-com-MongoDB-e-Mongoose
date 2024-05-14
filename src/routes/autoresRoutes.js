import express from "express";
import autorController from "../controller/autorController.js";

const routes = express.Router();

// rota para listar autores
routes.get("/autores", autorController.listarAutores);
// rota para cadastrar autor
routes.post("/autores", autorController.cadastrarAutor);
// rota para atualizar autor por id
routes.put("/autores/:id", autorController.atualizarAutor);
// rota para excluir autor
routes.delete("/autores/:id", autorController.excluirAutor);

export default routes;
