export class Turma {
  id_turma: string;
  nome_turma: string;
  modulo_turma: string;

  constructor(id_turma: string, nome_turma: string, modulo_turma: string) {
    this.id_turma = id_turma;
    this.nome_turma = nome_turma;
    this.modulo_turma = modulo_turma;
  }
}
