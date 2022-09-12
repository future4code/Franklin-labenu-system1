import { Response, Request } from "express";
import { Turma } from "../classes/Turma";
import createTurma from "../data/createTurma";

export const criaNovaTurma = async (req: Request, res: Response) => {
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
};
