import { Estudante } from "../classes/Estudante";
import connection from "../database/connection";

const createEstudante = async (estudanteData: Estudante) => {
  await connection("Estudante").insert(estudanteData);
};
export default createEstudante;
