# Teste Técnico - Grafeno

Matheus Gambati - [LinkedIn](https://www.linkedin.com/in/matheusgambati/) - [Github](https://www.github.com/mgambati/)

## Como Rodar o Projeto

No root do projeto:

```bash
# instala depências
yarn install

# Inicia server de dev
yarn start
```

Inicia o app em modo de desenvolvimento.<br />
Abra [http://localhost:3000](http://localhost:3000) para visualizar no Browser.

## Considerações

Apesar do teste ser simples e não exigir complexidade no código, fiz o código como se fosse um aplicativo maior e com mais requisitos. Dessa forma fica mais evidente a forma organizar, estruturar e escrever código no meu dia a dia.

Estou usando redux-toolkit para reduzir o boilerplate do redux. Também utilizo o `createAsyncThunk` que simplifica muito a escrita de thunks e também uso `extraReducers` em `pokemonsSlice` para que o Typescript possa inferir os tipos do thunk.

Espero que gostem :D
