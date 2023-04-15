# node-express

<p style="text-align: center;">Node Project Template - Express</p>

<p style="margin: 10px; auto">
    <img src="https://img.shields.io/badge/Javascript-yellow?style=for-the-badge&logo=Javascript&logoColor=white">
    <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white">
    <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white">
    <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white">
    <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E">
</p>

# Prerequisits

- Docker
- Visual Studio Code
- [Remote Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) extension.

Open the repository in Visual Studio Code and open the command pallete (F1).

Run the `Remote-Containers: Rebuild Without Cache and Reopen in Container` command.

# Installation

Copy `.env.example` to `.env`. Modify if required.

After that just install packages using npm.

```
npm ci install
```

# Usage

Start the application

```
npm start
```

Start the development server

```
npm run start:devserver
```

Run the tests

```
npm test
```

Run a single test file:

```
npm run test:single tests/app.test.ts
```

Run the coverage report

```
npm run test:coverage
```

Lint all files

```
npm run lint
```

Update all packages

```
npm run packages:update
```

# License

Copyright © 2023-present Sebastiaan de Haan

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.
