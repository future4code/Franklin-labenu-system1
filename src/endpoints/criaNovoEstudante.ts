import { Request, Response } from "express";
import { Estudante } from "../classes/Estudante";
import createEstudante from "../data/createEstudante";

export const criaNovoEstudante = async (req: Request, res: Response) => {
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
};
