import { autor } from "../models/Autor.js";

class AutorController {
  //listarAutores
  static async listarAutores(req, res) {
    try {
      const autores = await autor.find({});
      res.status(200).json({ autores });
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha ao listar autores` });
    }
  }

  //cadastrarAutor
  static async cadastrarAutor(req, res) {
    try {
      const novoAutor = await autor.create(req.body);
      res.status(201).json({ message: "Autor cadastrado com sucesso!" });
    } catch (erro) {
      res
        .status(500)
        .json({ message: "${erro.message} - Falha ao cadastrar autor" });
    }
  }

  //listarAutorPorId
  static async listarAutorPorId(req, res) {
    try {
      const id = req.params.id;
      const autorEncontrado = await autor.findById(id);
      res.status(200).json(autorEncontrado);
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - Falha na requisição do livro` });
    }
  }
  //atualizarAutor
  static async atualizarAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndUpdate(id, req.body);
      res.status(200).json("Autor atualizado com sucesso!");
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha na requisição` });
    }
  }
  //excluirAutor
  static async excluirAutor(req, res) {
    try {
      const id = req.params.id;
      await autor.findByIdAndDelete(id);
      res.status(200).json("Autor removido");
    } catch (erro) {
      res
        .status(500)
        .json({ message: `${erro.message} - falha ao deletar autor!` });
    }
  }
}

export default AutorController;
