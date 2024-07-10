import { Injectable } from '@angular/core';

export interface Endereco {
  rua: string;
  numero: number;
  cidade: string;
  estado: string;
  cep: string;
}

export interface Candidato {
  id?: number;
  nome: string;
  idade: any;
  email: string;
  telefone: string;
  endereco: Endereco;
  curso: string;
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { }

   inscricoes = [
    {
      id: 1,
      nome: 'Ana Silva',
      idade: 28,
      email: 'ana.silva@example.com',
      telefone: '(11) 98765-4321',
      endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01000-000'
      },
      curso: 'Engenharia de Software',
      status: 'Inscrito'
    },
    {
      id: 2,
      nome: 'Carlos Souza',
      idade: 34,
      email: 'carlos.souza@example.com',
      telefone: '(21) 97654-3210',
      endereco: {
        rua: 'Avenida Central',
        numero: 456,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '20000-000'
      },
      curso: 'Administração',
      status: 'Inscrito'
    },
    {
      id: 3,
      nome: 'Beatriz Costa',
      idade: 22,
      email: 'beatriz.costa@example.com',
      telefone: '(31) 96543-2109',
      endereco: {
        rua: 'Praça das Palmeiras',
        numero: 789,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30000-000'
      },
      curso: 'Medicina',
      status: 'Pendente'
    },
    {
      id: 4,
      nome: 'Daniel Oliveira',
      idade: 30,
      email: 'daniel.oliveira@example.com',
      telefone: '(41) 95432-1987',
      endereco: {
        rua: 'Rua das Hortências',
        numero: 321,
        cidade: 'Curitiba',
        estado: 'PR',
        cep: '80000-000'
      },
      curso: 'Direito',
      status: 'Inscrito'
    },
    {
      id: 5,
      nome: 'Elisa Fernandes',
      idade: 25,
      email: 'elisa.fernandes@example.com',
      telefone: '(51) 94321-9876',
      endereco: {
        rua: 'Avenida das Américas',
        numero: 654,
        cidade: 'Porto Alegre',
        estado: 'RS',
        cep: '90000-000'
      },
      curso: 'Arquitetura',
      status: 'Inscrito'
    },
    {
      id: 6,
      nome: 'Felipe Santos',
      idade: 29,
      email: 'felipe.santos@example.com',
      telefone: '(61) 93210-8765',
      endereco: {
        rua: 'Setor Bancário',
        numero: 987,
        cidade: 'Brasília',
        estado: 'DF',
        cep: '70000-000'
      },
      curso: 'Economia',
      status: 'Pendente'
    },
    {
      id: 7,
      nome: 'Gabriela Lima',
      idade: 27,
      email: 'gabriela.lima@example.com',
      telefone: '(71) 92109-7654',
      endereco: {
        rua: 'Avenida Atlântica',
        numero: 432,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '40000-000'
      },
      curso: 'Psicologia',
      status: 'Inscrito'
    },
    {
      id: 8,
      nome: 'Henrique Almeida',
      idade: 31,
      email: 'henrique.almeida@example.com',
      telefone: '(81) 91098-6543',
      endereco: {
        rua: 'Rua do Sol',
        numero: 876,
        cidade: 'Recife',
        estado: 'PE',
        cep: '50000-000'
      },
      curso: 'Engenharia Civil',
      status: 'Inscrito'
    },
    {
      id: 9,
      nome: 'Isabela Martins',
      idade: 24,
      email: 'isabela.martins@example.com',
      telefone: '(91) 90987-5432',
      endereco: {
        rua: 'Rua da Paz',
        numero: 765,
        cidade: 'Belém',
        estado: 'PA',
        cep: '66000-000'
      },
      curso: 'Enfermagem',
      status: 'Inscrito'
    },
    {
      id: 10,
      nome: 'João Pedro Costa',
      idade: 33,
      email: 'joao.costa@example.com',
      telefone: '(31) 99876-5432',
      endereco: {
        rua: 'Praça da Liberdade',
        numero: 543,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30000-000'
      },
      curso: 'Física',
      status: 'Pendente'
    }
  ];
}
