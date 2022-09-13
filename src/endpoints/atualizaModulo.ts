import { Request, Response } from "express";
import updateModuloTurma from "../data/updateModuloTurma";

export const atualizaModuloTurma = async (req: Request, res: Response) => {
  try {
    await updateModuloTurma(req.body.modulo_turma, req.params.id_turma);
    res.send("Success!");
  } catch (error) {
    res.status(400).send({
      message: "Não foi possível realizar mudança!",
    });
  }
};
