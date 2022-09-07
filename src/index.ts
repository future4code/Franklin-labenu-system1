import { Request, Response } from "express";
import connection from "./database/connection";
import app from "./app";

app.get("/turma", async (req: Request, res: Response) => {
    try {
        const result = await connection("Turma")
        console.log(result)

        res.send(result)
    } catch(error) {
        console.log(error)
    }
});

app.get("/estudante/:nome", async (req: Request, res: Response) => {

    const getStudentByName = async (nome: string): Promise<any> => {
        const result = await connection.raw(
            `SELECT * FROM Estudante WHERE nome = '${nome}'`
        )

        return result[0]
    }

    try {
        const nome = req.params.nome
        console.log(await getStudentByName(nome))
        res.send(await getStudentByName(nome))

    } catch(error) {
        console.log(error)
    }
});

app.get("/docente", async (req: Request, res: Response) => {
    try {
        const result = await connection("Docente")
        console.log(result)

        res.send(result)
    } catch(error) {
        console.log(error)
    }
});