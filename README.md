# apollo-serverless

Example project with Apollo Server and Serverless framework.

Stack:

- Apollo Server
- Knex
- MySQL
- Sqlite
- Webpack

## Setup

```
npm install
npm install -g serverless
npm install -g knex
```

## Env

Create `.env` from `.env.example` and fill in the values

## Serverless

Run offline

```
sls offline
```

Deploy

```
sls deploy
```

## Knex

Migrations

```
knex migrate:latest
knex migrate:latest --env production
```

Seed

```
knex seed:run
knex seed:run --env production
```
