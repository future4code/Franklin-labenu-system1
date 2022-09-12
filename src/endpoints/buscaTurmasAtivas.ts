import { Request, Response } from "express";
import connection from "../database/connection";

export const buscaTurmasAtivas = async (req: Request, res: Response) => {
  try {
    const result = await connection("Turma");

    res.send(result);
  } catch (error) {
    res.status(400).send({
      message: "Error ao criar turma!!",
    });
  }
};
