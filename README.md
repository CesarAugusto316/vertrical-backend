<h1 align="center">Welcome to vertrical-backend 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
</p>

> backend for vertrical search engine challenge

<br>

> IMPORTANT:
>
> ### Create a .env file like sample.env for your configurations in the root of your project.

<br>

## Quick Start

```sh
git clone <this_repo_url>
npm install
docker compose up # or use postgres if you have it installed
npm run db:up # resets db & runs migrations & seeders
npm run dev
```

## Run tests

```sh
npm test:start
```

## Docker Compose

```sh
docker compose create # only the first time
docker compose start
docker compose stop

# or alternatively
docker compose up
docker compose down
```

## Database_Commands

```bash
  npm run db:up
  npm run db:create
  npm run db:drop
  npm run db:seed
  npm run typeorm migration:generate ./src/migrations/<migration_name>
  npm run typeorm migration:run # runs all migrations
  npm run typeorm migration:revert # reverts all migrations
  npm run typeorm -d <your-data-source-path> migration:{run|revert} # runs or reverts migration by file
```

## Thunder-Client

Install thunder-client vscode extension to save the collections into our workspace.

```bash
  ctrl + shift + p
```

Open Preferences: User Settings (JSON) vscode command palette and insert
into settings.json:

```json
{ "thunder-client.saveToWorkspace": true }
```

Then you can visualise the folder thunder-tests to test the endpoints and save any change or test.

<br>

## Author

👤 **César Rivera**

- Website: http://react-final-pi.vercel.app/
- Github: [@CesarAugusto316](https://github.com/CesarAugusto316)
- LinkedIn: [@cesar rivera](https://linkedin.com/in/cesar rivera)

## Show your support

Give a ⭐️ if this project helped you!

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
