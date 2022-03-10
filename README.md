<h1 align="center"> :gear: VUTTR API

## :computer: Description

A API VUTTR (Very Useful Tools to Remember) serve para registrar e encontrar ferramentas na área de TI que são extremamente úteis no nosso dia-a-dia.
Nesse projeto também contém autenticação e autorização de usuários

## :rocket: Technology

- Nestjs

- Docker

- Typescript

- MySQL

- TypeORM

- Swagger

- JWT

- Passport

## :world_map: Routes

METHOD | PATH | 
|---|---|
| POST | /tools |
| DELETE | /tools/:id |
| GET | /tools |
| GET | /tools?tag=:tag |

METHOD | PATH | 
|---|---|
| POST | /login |
| POST | /refresh |
| DELETE | /logout |

## :hammer: Installation

```bash
$ npm install
```

## :woman_dancing: Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## :microscope: Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

