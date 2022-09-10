import { Request, Response } from "express";
import connection from "./database/connection";
import getStudentByName from "./data/getStudentByName";
import getllDocente from "./data/getAllDocentes";
import updateModuloTurma from "./data/updateModuloTurma";
import updateDocenteTurma from "./data/updateDocenteTurma";
import updateMudaEstudanteTurma from "./data/updateMudaEstudanteTurma";
import app from "./app";
import { Estudante } from "./classes/Estudante";
import { Turma } from "./classes/Turma";
import { Docente } from "./classes/Docente";
import createEstudante from "./data/createEstudante";
import createDocente from "./data/createDocente";
import createTurma from "./data/createTurma";

// ********** C Read UD **********

// Criar nova turma
app.post("/turma", async (req: Request, res: Response) => {
  try {
    const id_turma = req.body.id_turma;
    const nome_turma = req.body.nome_turma;
    const modulo_turma = req.body.modulo_turma;
    const novaTurma = new Turma(id_turma, nome_turma, modulo_turma);
    await createTurma(novaTurma);
    res.status(201).send({
      message: "Nova turma criada!!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Error ao criar turma!!",
    });
  }
});

// Buscar turmas ativas
app.get("/turma", async (req: Request, res: Response) => {
  try {
    const result = await connection("Turma");

    res.send(result);
  } catch (error) {
    res.status(400).send({
      message: "Error ao criar turma!!",
    });
  }
});

// Cria um novo estudante
app.post("/estudante", async (req: Request, res: Response) => {
  try {
    const id_estudante = req.body.id_estudante;
    const nome_estudante = req.body.nome_estudante;
    const email_estudante = req.body.email_estudante;
    const data_nasc_estudante = req.body.data_nasc_estudante;
    const turma_id = req.body.turma_id;
    const novoEstudante = new Estudante(
      id_estudante,
      nome_estudante,
      email_estudante,
      data_nasc_estudante,
      turma_id
    );
    await createEstudante(novoEstudante);
    res.status(201).send({
      message: "Novo estudante criado!!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Error ao criar estudante!!",
    });
  }
});

// Buscar estudantes através do nome
app.get("/estudante/:nome_estudante", async (req: Request, res: Response) => {
  try {
    const nome_estudante = req.params.nome_estudante;
    const estudante = await getStudentByName(nome_estudante);
    res.send(estudante);
  } catch (error) {
    res.status(400).send({
      message: "Error ao buscar estudante!!",
    });
  }
});

// Criar um novo docente
app.post("/docente", async (req: Request, res: Response) => {
  try {
    const id_docente = req.body.id_docente;
    const nome_docente = req.body.nome_docente;
    const mail_docente = req.body.email_docente;
    const data_nasc_docente = req.body.data_nasc_docente;
    const turma_id = req.body.turma_id;
    const novoDocente = new Docente(
      id_docente,
      nome_docente,
      mail_docente,
      data_nasc_docente,
      turma_id
    );
    await createDocente(novoDocente);
    res.status(201).send({
      message: "Novo docente criado!!",
    });
  } catch (error) {
    res.status(400).send({
      message: "Error ao criar docente!!",
    });
  }
});

// Buscar todas as pessoas docentes
app.get("/docente", async (req: Request, res: Response) => {
  try {
    const result = await getllDocente();
    res.send(result);
  } catch (error) {
    res.status(400).send({
      message: "Error ao buscar docente!!",
    });
  }
});

// ********** CR Update D **********

// Mudar turma de módulo
app.put("/muda-modulo-turma/:id_turma", async (req: Request, res: Response) => {
  try {
    await updateModuloTurma(req.body.modulo_turma, req.params.id_turma);
    res.send("Success!");
  } catch (error) {
    res.status(400).send({
      message: "Não foi possível realizar mudança!",
    });
  }
});

// Mudar estudante de turma
app.put(
  "/muda-turma-estudante/:id_estudante",
  async (req: Request, res: Response) => {
    try {
      await updateMudaEstudanteTurma(
        req.body.turma_id,
        req.params.id_estudante
      );
      res.send("Success!");
    } catch (error) {
      res.status(400).send({
        message: "Não foi possível realizar mudança!",
      });
    }
  }
);

// Mudar docente de turma
app.put(
  "/muda-turma-docente/:id_docente",
  async (req: Request, res: Response) => {
    try {
      await updateDocenteTurma(req.body.turma_id, req.params.id_docente);
      res.send("Success!");
    } catch (error) {
      res.status(500).send("Não foi possível realizar mudança!");
    }
  }
);
