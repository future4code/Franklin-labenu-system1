# LabenuSystem :school:
O sistema possui 3 entidades importantes, são elas:

***Estudantes***: 
Representa os estudantes da instituição de ensino e possuem: id, nome, email, data de nascimento e os principais hobbies dos estudantes.

***Docente***
Representa os docentes da instituição e possuem: id, nome, email, data de nascimento e todas as especialidades dele. Há 7 especialidades: React, Redux, CSS, Testes, Typescript, Programação Orientada a Objetos e Backend

***Turma***
Representam todas as turmas da intituição, e cada uma é composta das seguintes características: id, nome e módulo.

O módulo pode assumir os valores de 1 a 7 ou `undefined`, indicando que as aulas dessa turma ainda não começaram. Consideramos que existam dois tipos de turma: integral ou noturna. Há uma restrição para o nome das turmas noturnas: tem que terminar com `-na-night`.

Com as funcionalidades básicas dessa aplicação é possível:
* ***Criar estudantes***
* ***Criar docentes***
* ***Criar novas turmas***
* ***Realocar estudantes em outra turma***
* ***Mudar docentes de turma***
* ***Mudar o modulo de uma turma***
* ***Buscar docentes pelo nome***
* ***Buscar estudante pelo nome***
* ***Buscar turmas ativas***

### Documentação da API :books: 
***[Postman](https://documenter.getpostman.com/view/21462646/2s7YYscjRh)***

### Como rodar o projeto :gear:
 *  Clone o projeto na sua máquina.
 *  Rode o comando `npm install` no terminal.
 *  Criei um arquivo `.env` que contenha suas variáveis de ambiente e que façam conexão com seu banco de dados.
 *  Crie as tabelas de acordo com o arquivo `MySQL.sql`.
 *  Siga a documentação da API disponibilizada.



