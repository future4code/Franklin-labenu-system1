import { Request, Response } from "express";
import connection from "./database/connection";
import getStudentByName from "./data/getStudentByName";
import getllDocente from "./data/getAllDocentes";
import updateModuloTurma from "./data/updateModuloTurma";
import updateDocenteTurma from "./data/updateDocenteTurma";
import updateMudaEstudanteTurma from "./data/updateMudaEstudanteTurma";
import app from "./app";
import { Turma } from "./classes/Turma";
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
    console.log(result);

    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// Buscar estudantes através do nome

app.get("/estudante/:nome_estudante", async (req: Request, res: Response) => {
  try {
    const nome_estudante = req.params.nome_estudante;
    const estudente = await getStudentByName(nome_estudante);
    res.send(estudente);
  } catch (error) {
    console.log(error);
  }
});

// Buscar todas as pessoas docentes

app.get("/docente", async (req: Request, res: Response) => {
  try {
    const result = await getllDocente();
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});

// ********** CR Update D **********

// Mudar turma de módulo

app.put("/muda-modulo-turma/:id_turma", async (req: Request, res: Response) => {
  try {
    await updateModuloTurma(req.body.modulo_turma, req.params.id_turma);
    res.send("Success!");
  } catch (error) {
    console.log(error);
    res.status(500).send("An unexpected error occurred");
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
      console.log(error);
      res.status(500).send("An unexpected error occurred");
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
      console.log(error);
      res.status(500).send("An unexpected error occurred");
    }
  }
);
