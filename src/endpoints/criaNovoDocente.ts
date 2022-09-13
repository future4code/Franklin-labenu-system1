import { Request, Response } from "express";
import { Docente } from "../classes/Docente";
import createDocente from "../data/createDocente";

export const criaNovoDocente = async (req: Request, res: Response) => {
  try {
    const nome_docente = req.body.nome_docente;
    const email_docente = req.body.email_docente;
    const data_nasc_docente = req.body.data_nasc_docente;
    const turma_id = req.body.turma_id;
    const novoDocente = new Docente(
      nome_docente,
      email_docente,
      data_nasc_docente,
      turma_id
    );
    await createDocente(novoDocente);
    res.status(201).send({
      message: "Novo docente criado!!",
    });
  } catch (error) {
    console.log(error)
    res.status(400).send({
      message: "Error ao criar docente!!",
    });
  }
};
