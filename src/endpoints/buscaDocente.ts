import { Request, Response } from "express";
import getllDocente from "../data/getAllDocentes";

export const buscaDocentes = async (res: Response, req: Request) => {
  try {
    const result = await getllDocente();
    res.send(result);
  } catch (error) {
    res.status(400).send({
      message: "Error ao buscar docente!!",
    });
  }
};
