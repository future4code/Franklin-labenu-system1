import { Request, Response } from "express";
import updateMudaEstudanteTurma from "../data/updateMudaEstudanteTurma";

export const mudaEstudanteDeTurma = async (req: Request, res: Response) => {
  try {
    await updateMudaEstudanteTurma(req.body.turma_id, req.params.id_estudante);
    res.send("Success!");
  } catch (error) {
    res.status(400).send({
      message: "Não foi possível realizar mudança!",
    });
  }
};
