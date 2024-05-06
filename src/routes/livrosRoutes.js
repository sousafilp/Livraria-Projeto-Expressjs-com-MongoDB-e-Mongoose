import express from "express";
import livroController from "../controller/livroController.js";

// rotas relacionadas a livros
const routes = express.Router();

// para mostrar todos os livros quado estiver na rota "/livros"
routes.get("/livros", livroController.listarLivros);

export default routes;
