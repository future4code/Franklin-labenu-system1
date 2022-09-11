import { Docente } from "../classes/Docente";
import connection from "../database/connection";

const createDocente = async (docenteData: Docente) => {
  await connection("Docente").insert(docenteData);
};
export default createDocente;
