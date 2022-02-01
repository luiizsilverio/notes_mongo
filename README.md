<table>
  <tr>
    <td><img src="https://github.com/luiizsilverio/notes_mongo/blob/main/assets/mongo.png" /></td>
    <td><h1>NOTES-MONGO</h1></td>
  </tr>
</table>

## Conteúdo
* [Sobre a Aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Screenshots](#camera_flash-screenshots)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
API desenvolvida em __Node.js__, que implementa um CRUD com banco de dados __MongoDB__ e template engine __Handlebars__.<br />
Permite a inclusão de tarefas, alteração, consulta e exclusão.<br />
Desenvolvido durante o curso [MongoDB do básico ao avançado](https://www.udemy.com/course/mongodb-do-basico-ao-avancado-c-mongoose-e-projetos/), do prof. Matheus Battisti.<br />

### Rotas da aplicação

| Método | Caminho da Rota | Descrição da Rota |
|---|---|---|
| GET | http://localhost:8000/notes | Renderiza a view de criação da tarefa |
| POST | http://localhost:8000/notes | Inclui a nova tarefa no banco |
| POST | http://localhost:8000/delete | Exclui a tarefa do banco |
| GET | http://localhost:8000/notes/:id | Renderiza a view de detalhes da tarefa |
| GET | http://localhost:8000/notes/edit/:id | Renderiza a view de edição da tarefa |
| POST | http://localhost:8000/notes/update | Altera os dados da tarefa no banco |

## :hammer_and_wrench: Tecnologias
* __NodeJS__
* __MongoDB__
* Template engine __Express-Handlebars__
* __Bootstrap__ para fazer algumas estilizações

## :camera_flash: Screenshots
![](https://github.com/luiizsilverio/happy/blob/main/assets/screenshot.gif)

## :car: Iniciando a aplicação
Primeiramente, o banco de dados MongoDB precisa estar instalado.<br />
```bash
# Baixe o repositório com git clone e entre na pasta do projeto.
$ git clone https://github.com/luiizsilverio/notes_mongo.git

# Execute yarn para instalar as dependências (ou npm install)
$ yarn

# Para iniciar a aplicação
$ yarn start

# Abra http://localhost:8000 no navegador
```

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**luiiz.silverio@gmail.com**](mailto:luiiz.silverio@gmail.com)
