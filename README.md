<p align="center">
 <a href="#computer-o-projeto">Sobre</a> •
 <a href="#computer-tecnologias">Tecnologias usadas</a> • 
 <a href="#mag_right-para-rodar-o-projeto">Como rodar</a> • 
</p>

## :computer: O projeto

- Administração de Veículos para locação. Um sistema de login e criação de usuario utilizando JWT para proteção das rodas de administração dos veiculos, após autorizado possui total acesso ao painel, podendo atualizar, excluir, criar novos veículos e visualizar todos os veículos ou separados.
- Feito posteriormente uma tela de integração front end através do framework Angular, nela é possível fazer todos os métodos citados acima.

## :computer: Tecnologias

- Node, Typescript, Express
- Angular 16, Bootstrap, HTML,CSS
- Clean Architechture
- SOLID, POO
- PostgreSQL, Prisma ORM.
- Bcrypt para criptografia de login e senha
- JWT para autorização
- Docker e Docker-Compose
- Mocha para testes

## :mag_right: Para rodar o projeto:

```bash
# Pré requisitos
- Docker instalado na máquina

# Faça o clone do repositório
$ git clone <https://github.com/VictorCstr/CRUD_Angular_Node_CleanArch>

# Acesse a pasta do projeto no terminal
$ cd CRUD_Angular_Node_CleanArch

# Criar as variaveis para o container da API dentro da pasta back.
Postgres => .db.env FILE
Exemplos:
$ POSTGRES_USER:postgres
$ POSTGRES_PASSWORD:admin
$ POSTGRES_DB:Fontes

API => .env FILE
Exemplos:
$ NODE_ENV=dev
$ SECRET_KEY="paodequeijo"
$ DATABASE_URL="postgresql://postgres:admin@host.docker.internal:5432/Crud"

# Faça a instalação e execução de todos os containers com o compose
$ docker-compose up --build

# Para rodar os testes
$ Em outro terminal executar o comando abaixo com o compose ligado
$ 'docker exec -it {id do container} sh -c 'npm run test'

```
