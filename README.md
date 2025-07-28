# BOTLUNAR

Bot desenvolvido para funções básicas de uso, como por exemplo Embeds demonstrando conteúdos customizaveis, slashcommands e entre outros.

## Tecnologias utilizadas

- NodeJs 22.17.1
- Discloud

## Requisitos

- Ter sua aplicação criada e configurada em https://discord.com/developers/applications
- Ter instalado NodeJs versão 22+.
- Experiência com a biblioteca Discord.JS.


## Instalação
1 - Crie uma pasta onde implementará o bot, acesse a pasta `cd sua_pasta` e clone o projeto.

```
git clone https://github.com/IsraelBryan/BOTLUNAR.git
```

2 - Abra seu terminal de sua IDE/CMD e instale as dependências do projeto.
```
npm i
```

3 - Lembre-se de verificar os arquivos nos quais deseja mudar para o conteudo de seu servidor.

## Implementação para o funcionamento

- Nas configurações de sua aplicação criada em seu navegador, copie e cole o token e client_id de sua aplicação.

- O token se localiza na aba "Bot" nas configurações da sua aplicação.

- O Client_ID se localiza na aba "OAuth2" nas configurações de sua aplicação.

- Será necessário você copiar o id de seu servidor para que funcione, acesse seu servidor, clique com botão direito de seu mouse no nome do servidor, copie o seu id.

- Crie um arquivo `.env` dentro da pasta de sua aplicação `cd sua_pasta/BOTLUNAR`

```
TOKEN = COLE_SEU_TOKEN
CLIENT_ID = COLE_CLIENT_ID
GUILD_ID = COLE_SERVIDOR_ID
```

### Aviso: Tenha em mente que deverá instalar a biblioteca dotenv, para buscar seu token na aplicação.

## START do projeto

 Acesse a pasta source do projeto `cd sua_pasta/BOTLUNAR/src` e start o projeto.

```
node index.js
```

OU

Acesse apenas a pasta `cd sua_pasta/BOTLUNAR` e start via npm.

```
npm start

```