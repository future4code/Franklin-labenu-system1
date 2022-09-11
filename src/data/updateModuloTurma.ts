import connection from "../database/connection";

const updateModuloTurma = async (modulo_turma: string, id_turma: string) => {
  await connection("Turma")
    .update({
      modulo_turma: modulo_turma,
    })
    .where({
      id_turma: id_turma,
    });
};
export default updateModuloTurma;
