# URL Shortener

Simple URL shortener app inspired in URL Shortener chapter of
[System Design Interview - An insider's guide](https://www.amazon.com.br/System-Design-Interview-insiders-Second/dp/B08CMF2CQF).

## Description

It's consists of two routes, one to generate a shortened version of the given URL and another responsible to redirect to the original URL given the short one.

## Getting Started


This project needs PostgreSQL as its database, you can install following their [documentation](https://www.postgresql.org/) and creating the **url-shortener** database or with Docker, running this command:

```bash
docker run --name postgresql -e POSTGRES_PASSWORD=root -e POSTGRES_DB=url-shortener -p 5432:5432 -d postgres
```

### Installation

```bash
$ yarn install
```

### Running the app

```bash
$ yarn start:dev
```

### Test

```bash
# unit tests
$ yarn test

# test coverage
$ yarn test:cov
```

## Rest API

The two routes provided by the app are described below.

### Creating a shortened URL

### Request

`POST /shorten`

    curl -i http://localhost:3000/shorten?url=https://url-to-redirect.com/

### Response

    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: text/html; charset=utf-8
    Content-Length: 23
    Date: Sun, 27 Mar 2022 21:53:36 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    http://localhost:3000/1

### Redirecting to the original URL

### Request

`POST /{hash}`

    curl -i http://localhost:3000/1

### Response

    HTTP/1.1 301 Moved Permanently
    X-Powered-By: Express
    Location: https://url-to-redirect.com/
    Vary: Accept
    Content-Type: text/plain; charset=utf-8
    Content-Length: 62
    Date: Sun, 27 Mar 2022 21:57:21 GMT
    Connection: keep-alive
    Keep-Alive: timeout=5

    Moved Permanently. Redirecting to https://url-to-redirect.com/

## Author

Alexandre Peron -
[LinkedIn](https://www.linkedin.com/in/alexandresperon)

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

* [TypeScript](https://www.typescriptlang.org/)
* [NestJs](https://nestjs.com/)
* [TypeORM](https://typeorm.io/)
* [Yarn](https://yarnpkg.com/)
* [Jest](https://jestjs.io/)
