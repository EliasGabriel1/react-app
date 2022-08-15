## Getting Started with Create React App

O projeto foi estruturado pra receber um json ou objeto que vem da api, pra uma constante receber em forma de array, porém como na api que eu pretendia usar não encontrei nenhum end point com descrição de varios items, desta maneira:


por isso acabei reformulando antes de ir para os cards, como está nesse arquivo:



usei dois context para não precisar fazer ordem de prioridade nas rotas, já que não há necessidade da pessoa acessar o /cards apenas quando tiver "logado".


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install or npm i`

this command installs a package and any packages that it t
depends on. If the package has a package-lock, or an npm shrinkwrap file, or a yarn lock file, the installation of dependencies will be driven by that, respecting the following order of precedence: npm-shrinkwrap. json.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**
