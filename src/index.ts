import { Request, Response } from "express";
import connection from "./database/connection";
import app from "./app";

// ********** C Read UD **********

// Buscar turmas ativas

app.get("/turma", async (req: Request, res: Response) => {
    try {
        const result = await connection("Turma")
        console.log(result)

        res.send(result)
    } catch(error) {
        console.log(error)
    }
});

// Buscar estudantes através do nome

app.get("/estudante/:nome_estudante", async (req: Request, res: Response) => {

    const getStudentByName = async (nome_estudante: string): Promise<any> => {
        const result = await connection.raw(
            `SELECT * FROM Estudante 
             INNER JOIN Turma ON Turma.id_turma = Estudante.turma_id
             INNER JOIN Estudante_Hobby ON Estudante_Hobby.estudante_id = Estudante.id_estudante
             INNER JOIN Hobby ON Estudante_Hobby.hobby_id = Hobby.id_hobby
             WHERE Estudante.nome_estudante = '${nome_estudante}'`
        )

        return result[0]
    }

    try {
        const nome_estudante = req.params.nome_estudante
        console.log(await getStudentByName(nome_estudante))
        res.send(await getStudentByName(nome_estudante))

    } catch(error) {
        console.log(error)
    }
});

// Buscar todas as pessoas docentes

app.get("/docente", async (req: Request, res: Response) => {
    try {
        const result = await connection.raw(
            `SELECT * FROM Turma 
             INNER JOIN Docente ON Turma.id_turma = Docente.turma_id`
        )
        console.log(result[0][0])

        res.send(result[0])
    } catch(error) {
        console.log(error)
    }
});

// ********** CR Update D **********

// Mudar turma de módulo

app.put('/muda-modulo-turma/:id_turma', async (req: Request, res: Response) => {
    try {
        await connection("Turma").update({
            modulo_turma: req.body.modulo_turma
        }).where({
            id_turma: req.params.id_turma
        })

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
});

// Mudar estudante de turma 

app.put('/muda-turma-estudante/:id_estudante', async (req: Request, res: Response) => {
    try {
        await connection("Estudante").update({
            turma_id: req.body.turma_id
        }).where({
            id_estudante: req.params.id_estudante
        })

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
});

// Mudar docente de turma

app.put('/muda-turma-docente/:id_docente', async (req: Request, res: Response) => {
    try {
        await connection("Docente").update({
            turma_id: req.body.turma_id
        }).where({
            id_docente: req.params.id_docente
        })

        res.send("Success!")

    } catch (error) {
        console.log(error)
        res.status(500).send("An unexpected error occurred")
    }
});
