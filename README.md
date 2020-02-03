# fastfeet-api

Api para o app FastFeet, uma transportadora fictícia que faz parte do desafio final do curso GoStack da Rocketseat.

## Um pouco sobre as ferramentas

Você deverá criar a aplicação do zero utilizando o Express, além de precisar configurar as seguintes ferramentas:

- Sucrase + Nodemon;
- ESLint + Prettier + EditorConfig;
- Sequelize (Utilize PostgreSQL ou MySQL);

## Funcionalidades

Abaixo estão descritas as funcionalidades que você deve adicionar em sua aplicação.

## 1. Autenticação

Permita que um usuário se autentique em sua aplicação utilizando e-mail e uma senha.

Crie um usuário administrador utilizando a funcionalidade de seeds do sequelize, essa funcionalidade serve para criarmos registros na base de dados de forma automatizada.

Agora você tem um usuário na sua base de dados, utilize esse usuário para todos os logins que você fizer.

- A autenticação deve ser feita utilizando JWT.
- Realize a validação dos dados de entrada;

## 2. Gestão de destinatários

Você agora precisa permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, e esses devem ter o **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.

Utilize uma nova tabela no banco de dados chamada `recipient` para guardar informações do destinatário.

O cadastro de destinatários só pode ser feito por administradores autenticados na aplicação.

O destinatário não pode se autenticar no sistema, ou seja, não possui senha.

## Instalação

- Clone o projeto

```sh
git clone https://github.com/GiovaniMenegat/fastfeet-api.git
```

- Instalar as dependências

```sh
yarn
```

- Rodar migrations

```sh
yarn sequelize db:migrate
```

- Iniciar projeto

```sh
yarn dev
```
