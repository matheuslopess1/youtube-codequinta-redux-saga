# CodeQuinta #3 - Async com Redux Saga

Exemplo criado durante a [RocketLive #3](https://www.youtube.com/watch?v=qU9DesjDJic)

## Ferramentas

- [react](https://github.com/facebook/react) através do [create-react-app](https://github.com/facebook/create-react-app)
- [redux](https://github.com/reduxjs/redux)
- [react-redux](https://github.com/reduxjs/react-redux)
- [redux-saga](https://github.com/redux-saga/redux-saga)

## Conceitos

**O que é middleware?**

O middleware tem como uma das funcionalidades alterar o conteúdo entre a action e o reducer

**O que é uma ação assíncrona?**

Uma requisição que não ocorre em tempo de execução, como por exemplo, uma requisição a API.


**Qual a diferença entre Redux Saga ou [Redux Thunk](https://github.com/reduxjs/redux-thunk)?**

O thunk é muito simples de utilizar, porém por ser tão simples ele não vai resolver muito a questão de assincronidade, sendo limitado na questão de requisições e muito fraco na parte de testes. Já o saga é muito mais robusto, sendo necessário passar por muito mais detalhes para inicializar, porém depois a produção e escalabidade é melhor e mais fácil. Lembrando também que o saga tem uma facilidade maior para testar.

Vale citar também que o saga tem mais funcionalidades, como requisição do tipo debounce, throttle, setTimeout (tipo o do javascript), duas requests ao mesmo tempo, e muito mais.

## Desafio

**O que significa as funções:**

- takeEvery

Inicia um middleware toda vez que um pattern for despachado no store.

- takeLatest

Tem o mesm o princípio que o takeEvery, porém cancela o middleware anterior se ainda estiver rodando para iniciar um novo.

- put

Cria um efeito que despacha o carregamento de uma ação no store.

- call

Cria um efeito que faz com queseja chamada uma função informada no paramêtro, junto com seus argumentos também informados no parâmetro, porém separadamente.

- select

Cria um efeito que incova um selecionador no atual estado da store.

