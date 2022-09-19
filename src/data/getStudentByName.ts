import connection from "../database/connection";

const getStudentByName = async (nome_estudante: string): Promise<any> => {
  const result = await connection.raw(
    `SELECT * FROM Estudante 
         INNER JOIN Turma ON Turma.id_turma = Estudante.turma_id
         INNER JOIN Estudante_Hobby ON Estudante_Hobby.estudante_id = Estudante.id_estudante
         INNER JOIN Hobby ON Estudante_Hobby.hobby_id = Hobby.id_hobby
         WHERE Estudante.nome_estudante = '${nome_estudante}'`
  );

  return result[0];
};
export default getStudentByName;
