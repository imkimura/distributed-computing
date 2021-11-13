## Sistemas Distribuídos - Trabalho de PO

Api feita para matéria de Sistemas Distribuidos de BCC, em node com typescrpt contendo as rotas abaixo:

1. Lista alunos
2. Pesquisa um aluno específico
3. Cadastrar um aluno
4. Editar um aluno
5. Remover um aluno

Para rodar o projeto é necessário baixar as dependências e para conhecimento das rotas as mesmas estã documentadas em `./postman/backup.json`.

```cmd
# versão do node na minha máquina
node -v
12.15.0

npm -v
6.13.4
```

Após baixar projeto execute o comando abixo para baixar dependências

```
npm install
```

logo em seguida para criar o banco `databse.sqlite` execute os comandos abaixo

```
npm run knex:migrate
npm run knex:seed
```

e por fim para executar o projeto de um

```
npm run dev
```