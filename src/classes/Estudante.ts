import { IdGenerator } from "../services/IdGenerator";

export class Estudante {
  id_estudante: string;
  nome_estudante: string;
  email_estudante: string;
  data_nasc_estudante: string;
  turma_id: string;

  constructor(
    nome_estudante: string,
    email_estudante: string,
    data_nasc_estudante: string,
    turma_id: string
  ) {
    this.id_estudante = new IdGenerator().generateId()
    this.nome_estudante = nome_estudante;
    this.email_estudante = email_estudante;
    this.data_nasc_estudante = data_nasc_estudante;
    this.turma_id = turma_id;
  }
}
