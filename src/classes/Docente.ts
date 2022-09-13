import { IdGenerator } from "../services/IdGenerator";

export class Docente {
  id_docente: string;
  nome_docente: string;
  email_docente: string;
  data_nasc_docente: string;
  turma_id: string;

  constructor(
    nome_docente: string,
    email_docente: string,
    data_nasc_docente: string,
    turma_id: string
  ) {
    this.id_docente = new IdGenerator().generateId()
    this.nome_docente = nome_docente;
    this.email_docente = email_docente;
    this.data_nasc_docente = data_nasc_docente;
    this.turma_id = turma_id;
  }
};
