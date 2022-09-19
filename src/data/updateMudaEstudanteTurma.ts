import connection from "../database/connection";

const updateMudaEstudanteTurma = async (
  turma_id: string,
  id_estudante: string
) => {
  await connection("Estudante")
    .update({
      turma_id: turma_id,
    })
    .where({
      id_estudante: id_estudante,
    });
};
export default updateMudaEstudanteTurma;
