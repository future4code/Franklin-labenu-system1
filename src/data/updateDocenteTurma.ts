import connection from "../database/connection";

const updateDocenteTurma = async (turma_id: string, id_docente: string) => {
  await connection("Docente")
    .update({
      turma_id: turma_id,
    })
    .where({
      id_docente: id_docente,
    });
};
export default updateDocenteTurma;
