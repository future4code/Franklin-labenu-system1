-- Active: 1662749098790@@35.226.146.116@3306@franklin-ruth-lima
CREATE TABLE Turma (
		id_turma VARCHAR(255) PRIMARY KEY,
        nome_turma VARCHAR(255),
		modulo_turma VARCHAR(255) DEFAULT 0
);

INSERT INTO Turma (id_turma, nome_turma, modulo_turma) 
VALUES (
	"001",
    "Franklin",
    3
);

INSERT INTO Turma (id_turma, nome_turma, modulo_turma) 
VALUES (
	"002",
    "Nova-Turma",
    "004"
);

SELECT * FROM Turma;

CREATE TABLE Docente (
	id_docente VARCHAR(255) PRIMARY KEY,
    nome_docente VARCHAR(255),
    email_docente VARCHAR(255) NOT NULL UNIQUE, 
    data_nasc_docente DATE NOT NULL, 
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma(id_turma)
);

INSERT INTO Docente (id_docente, nome_docente, email_docente, data_nasc_docente, turma_id)
VALUES (
	"010",
    "Vitor Hugo",
    "vitor_hugo@mail.com",
    "1990-02-01",
    "001"
);

INSERT INTO Docente (id_docente, nome_docente, email_docente, data_nasc_docente, turma_id)
VALUES (
	"007",
    "Gui Carvalho",
    "guilherme@mail.com",
    "1992-02-26",
    "002"
);

SELECT * FROM Docente;

CREATE TABLE Estudante (
	id_estudante VARCHAR(255) PRIMARY KEY,
    nome_estudante VARCHAR(255) NOT NULL,
    email_estudante VARCHAR(255) NOT NULL UNIQUE, 
    data_nasc_estudante DATE NOT NULL, 
    turma_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (turma_id) REFERENCES Turma(id_turma)
);

INSERT INTO Estudante (id_estudante, nome_estudante, email_estudante, data_nasc_estudante, turma_id)
VALUES (
	"001",
    "Ruth Pessoa",
    "ruth@mail.com",
    "1996-02-01",
    "001"
);

INSERT INTO Estudante (id_estudante, nome_estudante, email_estudante, data_nasc_estudante, turma_id)
VALUES (
	"002",
    "Joely Brito",
    "joely_b@mail.com",
    "1995-02-01",
    "001"
);

INSERT INTO Estudante (id_estudante, nome_estudante, email_estudante, data_nasc_estudante, turma_id)
VALUES (
	"003",
    "Camila Alves",
    "cami@mail.com",
    "1992-02-01",
    "001"
);

SELECT * FROM Estudante;

CREATE TABLE Especialidade (
	id_espec VARCHAR(255) PRIMARY KEY,
    nome_espec VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Especialidade (id_espec, nome_espec)
VALUES (
	"001",
    "frontend"
);

INSERT INTO Especialidade (id_espec, nome_espec)
VALUES (
	"002",
    "backend"
);

SELECT * FROM Especialidade;
CREATE TABLE Docente_Especialidade (
	id_doc_esp VARCHAR(255) PRIMARY KEY,
    docente_id VARCHAR(255) NOT NULL,
    especialidade_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (docente_id) REFERENCES Docente(id_docente),
    FOREIGN KEY (especialidade_id) REFERENCES Especialidade(id_espec)
);

INSERT INTO Docente_Especialidade (id_doc_esp, docente_id, especialidade_id)
VALUES (
	"002",
    "007",
    "002"
);

INSERT INTO Docente_Especialidade (id_doc_esp, docente_id, especialidade_id)
VALUES (
	"001",
    "010",
    "001"
);

SELECT * FROM Docente_Especialidade;

CREATE TABLE Hobby (
	id_hobby VARCHAR(255) PRIMARY KEY,
    nome_hobby VARCHAR(255) NOT NULL UNIQUE
);

INSERT INTO Hobby (id_hobby, nome_hobby)
VALUES (
	"023",
    "macrame"
);

INSERT INTO Hobby (id_hobby, nome_hobby)
VALUES (
	"013",
    "ver série"
);

SELECT * FROM Hobby;

CREATE TABLE Estudante_Hobby (
	id_est_hob VARCHAR(255) PRIMARY KEY,
    estudante_id VARCHAR(255) NOT NULL,
    hobby_id VARCHAR(255) NOT NULL,
    FOREIGN KEY (estudante_id) REFERENCES Estudante(id_estudante),
    FOREIGN KEY (hobby_id) REFERENCES Hobby(id_hobby)
);

INSERT INTO Estudante_Hobby (id_est_hob, estudante_id, hobby_id)
VALUES (
	"001",
    "003",
    "023"
);

INSERT INTO Estudante_Hobby (id_est_hob, estudante_id, hobby_id)
VALUES (
	"002",
    "001",
    "013"
);

SELECT * FROM Estudante_Hobby;

SELECT * FROM Turma 
INNER JOIN Estudante ON Turma.id_turma = Estudante.turma_id;

SELECT * FROM Estudante 
INNER JOIN Turma ON Turma.id_turma = Estudante.turma_id
INNER JOIN Estudante_Hobby ON Estudante_Hobby.estudante_id = Estudante.id_estudante
INNER JOIN Hobby ON Estudante_Hobby.hobby_id = Hobby.id_hobby
WHERE Estudante.nome_estudante = "Camila Alves";

SELECT * FROM Turma 
INNER JOIN Docente ON Turma.id_turma = Docente.turma_id;
