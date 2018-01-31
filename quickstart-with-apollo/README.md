# React test project

based on: https://github.com/graphcool-examples/react-graphql

React + GraphQL (backend api:  https://api.graph.cool/simple/v1/cjd1svpqr08dh0190jx2hzvmu)

## Preparation:
1) `nodejs >= 8`
2) `yarn >= 1.3`

## how to start:

```sh
cd ./quickstart-with-apollo
yarn install
yarn start # open http://localhost:3000 in your browser
yarn test (3 jest + enzyme snapshot tests)
```

## what else could we do:
1) explicitly add `redux` to manage the state of the entire application transparently.
2) add `css modules` and `postcss` for the better support of isolation of css styles
3) add static typing with `typescript` (we have more than 4 years of experience with this programming language and more than 2 years of its usage with react)
4) maintain the configuration of the `webpack` in the actual state. As you could know it's almost a separate profession :)
5) refactor the current components and improve their performance (known problems with `HOC` components, using of  `pureComponents`, `shallow comparsion`, and so on)
6) In the future, with increasing complexity of projects, the system for managing side-effects is usually required. We use `redux-saga`, since it is well proven in field conditions (it is very similar to rxjs)
7) Lazy loading system and code splitting - because SPA sites are usually very heavy, so lazy loading allows you to break the project into small parts and load them on demand. We use the `react-loadable` library as a very good solution at the moment.

