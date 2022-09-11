import connection from "../database/connection"

const getllDocente = async() => {
    const result = await connection.raw(
        `SELECT * FROM Turma 
         INNER JOIN Docente ON Turma.id_turma = Docente.turma_id`
    )
    return result[0]
}
export default getllDocente;