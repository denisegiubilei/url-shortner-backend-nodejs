# Url Shortner - Backend

## :computer: Technologies

-  [NodeJS](https://nodejs.org/en/)
-  [Typescript](https://www.typescriptlang.org/)
-  [Typeorm](https://typeorm.io/#/)
-  [Postgres](https://www.postgresql.org/)
-  [eslint](https://eslint.org/)

## :information_source: How To Install

To clone and run this application, you'll need Git, Node.js and Yarn installed on your computer.

```bash
# Clone this repository
$ git clone https://github.com/denisegiubilei/url-shortner-backend-nodejs.git

# Go into the repository
$ cd url-shortner-backend-nodejs

# Install dependencies
$ yarn

# Create a .env file with a Postgres Database configuration (See .env.example)
$ touch .env

```
## :rocket: Running the application

To run on default http://localhost:3333/

```bash
$ yarn dev
```

## API HTTP Endpoints

```
GET http://localhost:3000/top-urls
GET http://localhost:3000/:url
POST http://localhost:3000/:url_short
```

