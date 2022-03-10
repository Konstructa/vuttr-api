<p align="center"> :gear: VUTTR API
</p>

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

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
