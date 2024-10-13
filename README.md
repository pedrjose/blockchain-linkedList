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
Para começar a utilizar o protótipo de rede Blockchain do projeto, você precisará digitar o comando `npm start` no seu terminal. Feito isso, o projeto irá iniciar um servidor com o framework [express.js](https://expressjs.com/pt-br/) e a biblioteca [nodemon](https://www.npmjs.com/package/nodemon) na porta 3000 do seu Localhost. O projeto irá confirmar se tudo está correto, e se sim, exibirá a mensagem *"BLOCKCHAIN NETWORK IS RUNNING ON 3000 PORT!"* no terminal.

A rota disponibilizada para simulação de transações na Blockchain é a `/blockchain/add-block`. O padrão para o corpo da requisição para essa rota é a seguinte:

img-example

Feito isso, uma Linked List será criada e novas transações serão adicionadas na Blockchain. [Veja aqui!](https://www.youtube.com/watch?v=qF4WzXPmHWA)

Antes que um novo bloco seja incorporado, a hash anterior é verificada com seus parâmetros originais, que incluem a hash anterior à dele, tornando impossível a fraude, visto que seria necessário fraudar todas as transações da rede.