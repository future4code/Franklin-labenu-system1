import { IdGenerator } from "../services/IdGenerator";

export class Turma {
  id_turma: string;
  nome_turma: string;
  modulo_turma: string;

  constructor(nome_turma: string, modulo_turma: string) {
    this.id_turma = new IdGenerator().generateId()
    this.nome_turma = nome_turma;
    this.modulo_turma = modulo_turma;
  }

}
