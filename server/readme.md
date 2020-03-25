# Server

### Arquitetura

> Iremos utilizar o [Yarn](https://yarnpkg.com/) para criação do nosso projeto.

- Crie uma pasta `mkdir server && cd server`
- Cria o projeto `yarn init -y`
- Instale o Express `yarn add express`
- Instale o Nodemon `yarn add nodemon -d`
- Crie o arquivo **[src/index.js](src/index.js)**
- Acrescente ao aquivo [package.json](package.json)

```
  "scripts": {
    "dev": "nodemon src/index.js"
  }
```

> Comando para executar o projeto: `yarn start`

### Libs Adcionais

##### Sqlite

- Instalação: `yarn add sqlite3`

##### [Knex.js](http://knexjs.org/)

- Instalação: `yarn add knex`
- Configuração: `yarn knex init`
- Migrations: `yan knex migrate:make nome-da-migration`
- Executar a migration: `yarn knex migrate:latest`
