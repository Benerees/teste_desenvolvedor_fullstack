# Instalação

### Pré-requisitos

- Node v18.16.0 [Install](https://nodejs.org/en/download/releases)
- Docker desktop [Install](https://www.docker.com/products/docker-desktop/)

- Abra a pasta do projeto e escreva esse comando no terminal:

```bash
docker-compose build
```

- Escreva esse comando assim que o build finalizar:

```bash
docker-compose up
```

O projeto está com alguns problemas que ainda precisam ser resolvidos, então abra o seu docker desktop, procure o container 'teste_desenvolvedor_fullstack' abra o container e pare de rodar a imagem 'teste_backend' para que o mesmo possa ser rodado localmente, mas o banco continue rodando dockerizado.

- Não se esquceça de instalar todas as dependências com o comando no terminal:
 
 ```bash
npm i
```

- Após a instalação, rode o projeto utilizando o comando no terminal:


 ```bash
npm run dev
```

Desse modo, o projeto estará rodando da maneira correta e pronto para a utilização das seguintes rotas:

- `/login` - [POST] - esta rota autentica um usuário admin ja cadastrado no banco e retornar o token para autenticação das outras APIs;
- `/posts` - [POST] - esta rota cadastra um polígono no formato do site  https://geojson.io/ (requer autenticação);
- `/posts/:id` - [PUT] - esta rota edita o polígono do ID especificado no formato do site  https://geojson.io/ mantendo a referência do usuario (requer autenticação);
- `/posts` - [GET] - esta rota retorna a lista de todos polígonos ordenados dos mais recentes para os mais antigos (requer autenticação);
- `/posts/:id` - [GET] - esta rota retorna o polígono do ID especificado com todos os seus dados (requer autenticação);
- `/posts/:id` - [DELETE] - esta rota deleta o polígono do ID especificado;

