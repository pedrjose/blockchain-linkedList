# Blockchain com Linked List

## 1. Introdução

Este repositório tem como objetivo disponibilizar o projeto n°1, realizado durante o estágio de Blockchain, Bitcoin e Drex.

A atividade proposta consistiu na criação de um protótipo de rede blockchain utilizando a estrutura de dados Linked List. Para realizar essa tarefa, utilizei JavaScript juntamente com a plataforma Node.js, criando um microservidor com Nodemon e Express, onde é possível simular o envio de transações de uma carteira cripto para outra.

Para rodar este projeto, você precisará dos seguintes pré-requisitos:

1. Possuir o [git](https://git-scm.com/) instalado na sua máquina;
2. Possuir o [node.js](https://nodejs.org/pt) instalado na sua máquina;
3. Possuir alguma API Client instalado na sua máquina, como o [Postman](https://www.postman.com/) ou [Thunder Client](https://www.thunderclient.com/).

## 2. Instalando

Para instalar o projeto, você irá precisar de algum editor de texto, como o [VS Code](https://code.visualstudio.com/). Com ele instalado, siga os seguintes passos:

1. Crie uma pasta e abra ela no seu editor de texto;
2. Abra o terminal na pasta e digite o comando `git clone`, seguido do url deste repositório. Feito isso, o projeto será clonado para sua máquina;
3. Abra a pasta com o nome deste repositório e digite o comando `npm i`, ele vai instalar todas as depedências necessárias para rodar o projeto.

## 3. Criando uma rede Blockchain

Para começar a utilizar o protótipo de rede Blockchain do projeto, você precisará digitar o comando `npm start` no seu terminal. Feito isso, o projeto irá iniciar um servidor com o framework [express.js](https://expressjs.com/pt-br/) e a biblioteca [nodemon](https://www.npmjs.com/package/nodemon) na porta 3000 do seu Localhost. O projeto irá confirmar se tudo está correto, e se sim, exibirá a mensagem _"BLOCKCHAIN NETWORK IS RUNNING ON 3000 PORT!"_ no terminal.

### 3.1 Camada de Blocos: */block*

A camada disponibilizada para simulação de criação de transações na Blockchain é a `POST /block/create-block`.

**REQ Example:**

```json
{
  "value": "2",
  "fromWallet": "@joao.wallet",
  "toWallet": "@maria.wallet"
}
```

### 3.2 Camada de Mineração: */mine*

O bloco criado na camada anterior fica armazenado no MongoDB Atlas, em _stand by_, no aguardo para ser minerado. A rota disponibilizada para minerador um bloco é `PATCH /mine/validate-block`. Um bloco é selecionado ao aleatório, com uma dificuldade aleatória, que pode variar entre 1 e 10.

### 3.3 Camada de Blockchain: */blockchain*

Caso o usuário queira consultar suas transações realizadas na blockchain, ele pode usar a rota `GET /blockchain/history`, onde ele terá acesso a toda blockchain e poderá consultar as transações feitas.


## 4. Observações

- A blockchain não está sendo armazenada em nenhum mecanismo de database, logo, ao reiniciar ela, o histórico de blocos será perdido e será necessário criar novos blocos e minerar os mesmos para testar a rede.