import { Aluno } from '../common/aluno';

export class CadastroDeAlunos {
  alunos: Aluno[] = [];

  cadastrar(aluno: Aluno): Aluno {
    var result = null;
    if (this.dadosValidos(aluno)) {
      result = new Aluno();
      result.copyFrom(aluno);
      this.alunos.push(result);
    }
    return result;
  }

  dadosValidos(aluno: Aluno): boolean {
    return this.githubNaoCadastrado(aluno.github) && this.cpfNaoCadastrado(aluno.cpf);
  }

  githubNaoCadastrado(git: string): boolean {
    return !this.alunos.find(a => a.github == git);
  }

  cpfNaoCadastrado(cpf: string): boolean {
    return !this.alunos.find(a => a.cpf == cpf);
  }

  atualizar(aluno: Aluno): Aluno {
    var result: Aluno = this.alunos.find(a => a.cpf == aluno.cpf);
    if (result) result.copyFrom(aluno);
    return result;
  }

  getAlunos(): Aluno[] {
    return this.alunos;
  }

  excluir(cpf: string): Aluno[] {
    var result = this.alunos.filter(a => a.cpf != cpf);
    this.alunos = result;
    return result;
  }
}