import { Turma } from "../classes/Turma";
import connection from "../database/connection";

const createTurma = async (turmaData: Turma) => {
  await connection("Turma").insert(turmaData);
};
export default createTurma;
