import express from "express";
import livroController from "../controller/livroController.js";

// rotas relacionadas a livros
const routes = express.Router();

// para mostrar todos os livros quado estiver na rota "/livros"
routes.get("/livros", livroController.listarLivros);
routes.get("/livros/:id", livroController.listarLivroPorId);
routes.post("/livros", livroController.cadastrarLivro);
routes.put("/livros/:id", livroController.atualizarLivro);
routes.delete("/livros/:id", livroController.excluirLivro);

export default routes;
