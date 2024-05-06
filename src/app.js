import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livro.js";

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
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Curso de nodejs");
});

// mostrar Livros
app.get("/livros", async (req, res) => {
  const listaLivros = await livro.find({});
  res.status(200).json(listaLivros);
});

// // Buscando Livros
// app.get("/livros/:id", (req, res) => {
//   const index = buscandoLivro(req.params.id);
//   res.status(200).json(livros[index]);
// });

// // Criando Livros
// app.post("/livros", (req, res) => {
//   livros.push(req.body);
//   res.status(201).send("Livro cadastrado com sucesso!");
// });

// // Atualizando livros
// app.put("/livros/:id", (req, res) => {
//   const index = buscandoLivro(req.params.id);
//   livros[index].titulo = req.body.titulo;
//   res.status(201).send("Livro atualizado com sucesso!");
// });

// // Deletando livro
// app.delete("/livros/:id", (req, res) => {
//   const index = buscandoLivro(req.params.id);
//   livros.splice(index, 1);
//   res.status(200).send("Livro removido com sucesso!");
// });

export default app;
