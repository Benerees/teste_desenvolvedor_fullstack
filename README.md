# Spotsat Teste Desenvolvedor Fullstack

## Pré-requisitos

- Node v18.16.0 [Install](https://nodejs.org/en/download/releases)
- Docker desktop [Install](https://www.docker.com/products/docker-desktop/)


## Execução do programa


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


## APIs
- `/login` - [POST] - esta rota autentica um usuário admin ja cadastrado no banco e retornar o token para autenticação das outras APIs;
- `/posts` - [POST] - esta rota cadastra um polígono no formato do site  https://geojson.io/ (requer autenticação);
- `/posts/:id` - [PUT] - esta rota edita o polígono do ID especificado no formato do site  https://geojson.io/ mantendo a referência do usuario (requer autenticação);
- `/posts` - [GET] - esta rota retorna a lista de todos polígonos ordenados dos mais recentes para os mais antigos (requer autenticação);
- `/posts/:id` - [GET] - esta rota retorna o polígono do ID especificado com todos os seus dados (requer autenticação);
- `/posts/:id` - [DELETE] - esta rota deleta o polígono do ID especificado;


## Uso das APIs

O sistema estará rodando na porta 4000, ou seja, pra fazer as requisções nas APIs é necessário utilizar da rota principal com http://localhost:4000. Como todas as APIs requerem autenticação, é necessário começar pela requisição do login!

#### *URL: POST http://localhost:4000/login

*Body:
```
{
    "email": "teste@gmail.com",
    "password": "teste"
}
```



#### *URL: POST http://localhost:4000/posts

*Header: Authorization: Token gerado no Login

*Body:
```
{
   "typype": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "coordinates": [
          [
            -45.902094428793475,
            -23.207792630377128
          ],
          [
            -45.90196903848698,
            -23.20792085726893
          ],
          [
            -45.9018969390188,
            -23.20786009448699
          ],
          [
            -45.90192340126117,
            -23.207835718619634
          ],
          [
            -45.90188171266618,
            -23.207800213865966
          ],
          [
            -45.90184856716553,
            -23.20783386086059
          ],
          [
            -45.90177651300013,
            -23.207772936739175
          ],
          [
            -45.90190943987852,
            -23.20763644511797
          ],
          [
            -45.90197503372417,
            -23.207693551034936
          ],
          [
            -45.901944345106955,
            -23.207716840745718
          ],
          [
            -45.902009698113574,
            -23.207772031047412
          ],
          [
            -45.90203532148709,
            -23.207742587662935
          ],
          [
            -45.902094023303164,
            -23.20779287798426
          ]
        ],
        "type": "LineString"
      }
    }
  ]
}
```




#### *URL: PUT http://localhost:4000/posts/:id

o id será um UUID que foi retornado na criação do poligono

*Header: Authorization: Token gerado no Login

ex: http://localhost:4000/posts/1ec5309f-fc02-495e-b5d1-427e9e3802ae



#### *URL: GET http://localhost:4000/posts

*Header: Authorization: Token gerado no Login



#### *URL: GET http://localhost:4000/posts/:id

*Header: Authorization: Token gerado no Login

ex: http://localhost:4000/posts/1ec5309f-fc02-495e-b5d1-427e9e3802ae



#### *URL: DELETE http://localhost:4000/posts/:id

*Header: Authorization: Token gerado no Login

ex: http://localhost:4000/posts/1ec5309f-fc02-495e-b5d1-427e9e3802ae
