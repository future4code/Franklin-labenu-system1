import { Request, Response } from "express";
import updateDocenteTurma from "../data/updateDocenteTurma";

export const mudaDocenteDeTurma = async (req: Request, res: Response) => {
  try {
    await updateDocenteTurma(req.body.turma_id, req.params.id_docente);
    res.send("Success!");
  } catch (error) {
    res.status(500).send("Não foi possível realizar mudança!");
  }
};
