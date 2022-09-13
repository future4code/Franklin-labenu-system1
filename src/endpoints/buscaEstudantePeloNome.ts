import { Request, Response } from "express";
import getStudentByName from "../data/getStudentByName";

export const buscaEstudantePeloNome = async (req: Request, res: Response) => {
  try {
    const nome_estudante = req.params.nome_estudante;
    console.log(nome_estudante)
    const estudante = await getStudentByName(nome_estudante);
    res.send(estudante);
  } catch (error) {
    res.status(400).send({
      message: "Error ao buscar estudante!!",
    });
  }
};
