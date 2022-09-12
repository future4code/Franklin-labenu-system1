import { Request, Response } from "express";
import { Docente } from "../classes/Docente";
import createDocente from "../data/createDocente";

export const criaNovoDocente = async (req: Request, res: Response) => {
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
};
