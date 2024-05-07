# Livraria - Projeto Express.js com MongoDB e Mongoose

Este é um projeto de exemplo para uma aplicação de livraria utilizando Node.js, Express.js, MongoDB e Mongoose. O objetivo deste projeto é praticar os conceitos de CRUD (Create, Read, Update, Delete) em uma aplicação web.

## Uso

Para iniciar o servidor, execute o seguinte comando:

```npm start```

A aplicação estará disponível em `http://localhost:3000`.

## Rotas

- `GET /livros`: Retorna todos os livros cadastrados.
- `GET /livros/:id`: Retorna um livro específico pelo ID.
- `POST /livros`: Cria um novo livro.
- `PUT /livros/:id`: Atualiza um livro existente pelo ID.
- `DELETE /livros/:id`: Deleta um livro existente pelo ID.

As requisições `POST` e `PUT` devem enviar os dados no formato JSON no corpo da requisição, por exemplo:

```json
{
  "titulo": "O Senhor dos Anéis",
  "editora": "Martins Fontes",
  "preco": 59.90,
  "pagina": 1024
}

