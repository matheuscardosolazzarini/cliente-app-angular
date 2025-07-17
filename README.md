
# Aplicação Front-end em Angular (Cliente-App)

Este é o projeto front-end desenvolvido em Angular para consumir a **API de Clientes e Pedidos**. A aplicação permite a visualização, criação, edição e exclusão de clientes, utilizando componentes do Angular Material para uma interface limpa e reativa.

### ⚠️ **Dependência Importante**

Esta aplicação front-end **não funciona sozinha**. Ela foi projetada para consumir os dados da API em C# .NET. Certifique-se de que o projeto back-end esteja configurado e em execução para que o front-end possa buscar e enviar dados.

## Índice

- [Pré-requisitos](#pré-requisitos)
- [Configuração do Projeto](#️-configuração-do-projeto)
- [Executando a Aplicação](#️-executando-a-aplicação)
- [Funcionalidades Implementadas](#-funcionalidades-implementadas)

## Pré-requisitos

Antes de começar, você precisará ter o seguinte software instalado em sua máquina:

* [Node.js](https://nodejs.org/en/) (versão LTS recomendada)
* [Angular CLI](https://angular.io/cli) (instalado globalmente)
  ```bash
  npm install -g @angular/cli
⚙️ Configuração do Projeto
Siga os passos abaixo para configurar o ambiente de desenvolvimento local.

```
 git clone https://github.com/matheussardosolazzarini/cliente-app-angular.git
```
 
cd cliente-app 

Instale as Dependências

Este comando irá baixar todas as bibliotecas necessárias para o projeto (Angular, Angular Material, ngx-mask, etc.) que estão listadas no arquivo package.json.

Bash

npm install

Configure a URL da API

Abra o arquivo de serviço: src/app/services/cliente.service.ts.

Verifique se a propriedade apiUrl corresponde à URL da sua API C# em execução (especialmente a porta). Para desenvolvimento local, ela deve usar http.

TypeScript

// src/app/services/cliente.service.ts

export class ClienteService {
  // Verifique se esta URL está correta
  private readonly apiUrl = 'http://localhost:5063/api/clientes'; 

  // ... resto do serviço
}
▶️ Executando a Aplicação
Para executar a aplicação, o back-end e o front-end precisam estar rodando simultaneamente.

Inicie o Back-end: Execute a API C# .NET a partir do Visual Studio ou via linha de comando.

Inicie o Front-end: No terminal, dentro da pasta cliente-app, execute o seguinte comando:

```ng serve --open```
Isso irá compilar a aplicação e abri-la automaticamente no seu navegador, geralmente no endereço http://localhost:4200.

✨ Funcionalidades Implementadas
Listagem de clientes em uma tabela do Angular Material.

Visualização de detalhes de um cliente específico e seus pedidos.

Criação de um novo cliente através de um formulário reativo.

Edição dos dados de um cliente existente.

Exclusão de um cliente com um diálogo de confirmação para segurança.

Máscaras de input para campos de CPF e Telefone.
