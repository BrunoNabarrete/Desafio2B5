# **Desafio 2B5 - Transações**

**Sobre**

Este projeto consiste em uma aplicação para gerenciamento de transações.

**Índice**

- [Sobre](#sobre)
- [Endpoints](#endpoints)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Como Usar](#como-usar)

**Sobre**

Este projeto é uma API RESTful desenvolvida em Spring Boot para realizar operações de CRUD (Create, Read, Update, Delete) relacionadas às transações.

**Endpoints**

**Buscar Todas as Transações**

- **URL:** `/transacoes`
- **Método:** `GET`
- **Descrição:** Retorna todas as transações cadastradas.
- **Resposta de Sucesso:** `200 OK` junto com uma lista de objetos `TransacoesEntity`.
- **Exemplo de Uso:**
  ```http
  GET /transacoes HTTP/1.1
  Host: localhost:8080


Inserir Transação

URL: /transacoes
Método: POST
Descrição: Insere uma nova transação.
Corpo da Requisição: Objeto TransacoesEntity.
Resposta de Sucesso: 200 OK junto com o ID da transação inserida.
Exemplo de Uso:
http
Copy code
POST /transacoes HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
  "data": "2023-02-15",
  "valor": 80.00,
  "categoria": "alimentacao"
}
Atualizar Transação

URL: /transacoes
Método: PUT
Descrição: Atualiza uma transação existente.
Corpo da Requisição: Objeto TransacoesEntity com ID da transação a ser atualizada.
Resposta de Sucesso: 200 OK se a transação foi atualizada com sucesso.
Resposta de Erro: 500 Internal Server Error se o ID da transação não foi informado.
Exemplo de Uso:
http
Copy code
PUT /transacoes HTTP/1.1
Host: localhost:8080
Content-Type: application/json

{
  "id": 1,
  "data": "2023-02-15",
  "valor": 80.00,
  "categoria": "alimentacao"
}
Deletar Transação

URL: /transacoes
Método: DELETE
Descrição: Deleta uma transação existente.
Parâmetro da Requisição: ID da transação a ser deletada.
Resposta de Sucesso: 200 OK se a transação foi deletada com sucesso.
Exemplo de Uso:
http
Copy code
DELETE /transacoes?id=1 HTTP/1.1
Host: localhost:8080
Tecnologias Utilizadas

Spring Boot
Spring Data JPA
Hibernate
MySQL
Como Usar

Clone este repositório.
Configure o banco de dados MySQL.
Execute o projeto Spring Boot.
