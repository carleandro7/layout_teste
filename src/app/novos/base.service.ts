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
  serie: string;
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
      serie: '1º ano',
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
      serie: '2º ano',
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
      serie: '3º ano',
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
      serie: '4º ano',
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
      serie: '5º ano',
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
      serie: '6º ano',
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
      serie: '7º ano',
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
      serie: '8º ano',
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
      serie: '9º ano',
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
      serie: '1º ano',
      status: 'Pendente'
    },
    {
      id: 11,
      nome: 'Laura Mendes',
      idade: 26,
      email: 'laura.mendes@example.com',
      telefone: '(21) 91234-5678',
      endereco: {
        rua: 'Rua dos Andradas',
        numero: 321,
        cidade: 'Niterói',
        estado: 'RJ',
        cep: '24000-000'
      },
      serie: '2º ano',
      status: 'Inscrito'
    },
    {
      id: 12,
      nome: 'Marcelo Teixeira',
      idade: 29,
      email: 'marcelo.teixeira@example.com',
      telefone: '(31) 92345-6789',
      endereco: {
        rua: 'Rua das Oliveiras',
        numero: 654,
        cidade: 'Contagem',
        estado: 'MG',
        cep: '32000-000'
      },
      serie: '3º ano',
      status: 'Inscrito'
    },
    {
      id: 13,
      nome: 'Natalia Gomes',
      idade: 27,
      email: 'natalia.gomes@example.com',
      telefone: '(71) 93456-7890',
      endereco: {
        rua: 'Rua das Acácias',
        numero: 987,
        cidade: 'Feira de Santana',
        estado: 'BA',
        cep: '44000-000'
      },
      serie: '4º ano',
      status: 'Pendente'
    },
    {
      id: 14,
      nome: 'Otávio Araujo',
      idade: 32,
      email: 'otavio.araujo@example.com',
      telefone: '(11) 94567-8901',
      endereco: {
        rua: 'Avenida Paulista',
        numero: 1234,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01300-000'
      },
      serie: '5º ano',
      status: 'Inscrito'
    },
    {
      id: 15,
      nome: 'Paula Ribeiro',
      idade: 24,
      email: 'paula.ribeiro@example.com',
      telefone: '(51) 95678-9012',
      endereco: {
        rua: 'Rua da Independência',
        numero: 567,
        cidade: 'Canoas',
        estado: 'RS',
        cep: '92000-000'
      },
      serie: '6º ano',
      status: 'Inscrito'
    },
    {
      id: 16,
      nome: 'Rafael Castro',
      idade: 30,
      email: 'rafael.castro@example.com',
      telefone: '(81) 96789-0123',
      endereco: {
        rua: 'Rua do Comércio',
        numero: 890,
        cidade: 'Olinda',
        estado: 'PE',
        cep: '53000-000'
      },
      serie: '7º ano',
      status: 'Inscrito'
    },
    {
      id: 17,
      nome: 'Sofia Cardoso',
      idade: 31,
      email: 'sofia.cardoso@example.com',
      telefone: '(61) 97890-1234',
      endereco: {
        rua: 'Setor Sul',
        numero: 123,
        cidade: 'Taguatinga',
        estado: 'DF',
        cep: '72000-000'
      },
      serie: '8º ano',
      status: 'Pendente'
    },
    {
      id: 18,
      nome: 'Thiago Nunes',
      idade: 28,
      email: 'thiago.nunes@example.com',
      telefone: '(91) 98901-2345',
      endereco: {
        rua: 'Rua dos Jacarandás',
        numero: 456,
        cidade: 'Ananindeua',
        estado: 'PA',
        cep: '67000-000'
      },
      serie: '9º ano',
      status: 'Inscrito'
    },
    {
      id: 19,
      nome: 'Vanessa Martins',
      idade: 25,
      email: 'vanessa.martins@example.com',
      telefone: '(31) 91234-5678',
      endereco: {
        rua: 'Praça Sete',
        numero: 789,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30000-000'
      },
      serie: '1º ano',
      status: 'Inscrito'
    },
    {
      id: 20,
      nome: 'William Alves',
      idade: 33,
      email: 'william.alves@example.com',
      telefone: '(71) 92345-6789',
      endereco: {
        rua: 'Avenida Sete de Setembro',
        numero: 432,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '40000-000'
      },
      serie: '2º ano',
      status: 'Inscrito'
    },
    {
      id: 21,
      nome: 'Xavier Pires',
      idade: 27,
      email: 'xavier.pires@example.com',
      telefone: '(11) 93456-7890',
      endereco: {
        rua: 'Rua Bela Vista',
        numero: 123,
        cidade: 'Santos',
        estado: 'SP',
        cep: '11000-000'
      },
      serie: '3º ano',
      status: 'Pendente'
    },
    {
      id: 22,
      nome: 'Yasmin Rocha',
      idade: 24,
      email: 'yasmin.rocha@example.com',
      telefone: '(21) 94567-8901',
      endereco: {
        rua: 'Rua das Laranjeiras',
        numero: 654,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22000-000'
      },
      serie: '4º ano',
      status: 'Inscrito'
    },
    {
      id: 23,
      nome: 'Zilda Faria',
      idade: 30,
      email: 'zilda.faria@example.com',
      telefone: '(81) 95678-9012',
      endereco: {
        rua: 'Avenida Boa Viagem',
        numero: 789,
        cidade: 'Recife',
        estado: 'PE',
        cep: '51000-000'
      },
      serie: '5º ano',
      status: 'Inscrito'
    },
    {
      id: 24,
      nome: 'Arthur Brito',
      idade: 32,
      email: 'arthur.brito@example.com',
      telefone: '(61) 96789-0123',
      endereco: {
        rua: 'Rua das Palmeiras',
        numero: 890,
        cidade: 'Brasília',
        estado: 'DF',
        cep: '71000-000'
      },
      serie: '6º ano',
      status: 'Inscrito'
    },
    {
      id: 25,
      nome: 'Beatriz Santos',
      idade: 26,
      email: 'beatriz.santos@example.com',
      telefone: '(91) 97890-1234',
      endereco: {
        rua: 'Rua da Paz',
        numero: 123,
        cidade: 'Belém',
        estado: 'PA',
        cep: '66000-000'
      },
      serie: '7º ano',
      status: 'Pendente'
    },
    {
      id: 26,
      nome: 'Caio Barros',
      idade: 31,
      email: 'caio.barros@example.com',
      telefone: '(11) 98901-2345',
      endereco: {
        rua: 'Avenida Angélica',
        numero: 456,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01200-000'
      },
      serie: '8º ano',
      status: 'Inscrito'
    },
    {
      id: 27,
      nome: 'Diana Souza',
      idade: 28,
      email: 'diana.souza@example.com',
      telefone: '(21) 91234-5678',
      endereco: {
        rua: 'Rua Visconde de Pirajá',
        numero: 789,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22400-000'
      },
      serie: '9º ano',
      status: 'Inscrito'
    },
    {
      id: 28,
      nome: 'Eduardo Lima',
      idade: 29,
      email: 'eduardo.lima@example.com',
      telefone: '(71) 92345-6789',
      endereco: {
        rua: 'Rua das Gaivotas',
        numero: 432,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '41700-000'
      },
      serie: '1º ano',
      status: 'Pendente'
    },
    {
      id: 29,
      nome: 'Fernanda Costa',
      idade: 25,
      email: 'fernanda.costa@example.com',
      telefone: '(31) 93456-7890',
      endereco: {
        rua: 'Avenida Amazonas',
        numero: 123,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30100-000'
      },
      serie: '2º ano',
      status: 'Inscrito'
    },
    {
      id: 30,
      nome: 'Guilherme Azevedo',
      idade: 27,
      email: 'guilherme.azevedo@example.com',
      telefone: '(11) 94567-8901',
      endereco: {
        rua: 'Rua Augusta',
        numero: 654,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01300-000'
      },
      serie: '3º ano',
      status: 'Inscrito'
    },
    {
      id: 31,
      nome: 'Helena Melo',
      idade: 26,
      email: 'helena.melo@example.com',
      telefone: '(81) 95678-9012',
      endereco: {
        rua: 'Rua das Acácias',
        numero: 789,
        cidade: 'Recife',
        estado: 'PE',
        cep: '50000-000'
      },
      serie: '4º ano',
      status: 'Pendente'
    },
    {
      id: 32,
      nome: 'Igor Pereira',
      idade: 30,
      email: 'igor.pereira@example.com',
      telefone: '(71) 96789-0123',
      endereco: {
        rua: 'Rua das Hortências',
        numero: 890,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '40000-000'
      },
      serie: '5º ano',
      status: 'Inscrito'
    },
    {
      id: 33,
      nome: 'Julia Almeida',
      idade: 29,
      email: 'julia.almeida@example.com',
      telefone: '(91) 97890-1234',
      endereco: {
        rua: 'Rua da Liberdade',
        numero: 123,
        cidade: 'Belém',
        estado: 'PA',
        cep: '66000-000'
      },
      serie: '6º ano',
      status: 'Inscrito'
    },
    {
      id: 34,
      nome: 'Lucas Ferreira',
      idade: 24,
      email: 'lucas.ferreira@example.com',
      telefone: '(11) 98901-2345',
      endereco: {
        rua: 'Rua dos Trilhos',
        numero: 456,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '03000-000'
      },
      serie: '7º ano',
      status: 'Pendente'
    },
    {
      id: 35,
      nome: 'Mariana Nogueira',
      idade: 27,
      email: 'mariana.nogueira@example.com',
      telefone: '(21) 91234-5678',
      endereco: {
        rua: 'Avenida Brasil',
        numero: 789,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '21000-000'
      },
      serie: '8º ano',
      status: 'Inscrito'
    },
    {
      id: 36,
      nome: 'Nicolas Cardoso',
      idade: 31,
      email: 'nicolas.cardoso@example.com',
      telefone: '(51) 92345-6789',
      endereco: {
        rua: 'Avenida Independência',
        numero: 432,
        cidade: 'Porto Alegre',
        estado: 'RS',
        cep: '90000-000'
      },
      serie: '9º ano',
      status: 'Inscrito'
    },
    {
      id: 37,
      nome: 'Olivia Ramos',
      idade: 28,
      email: 'olivia.ramos@example.com',
      telefone: '(81) 93456-7890',
      endereco: {
        rua: 'Rua do Comercio',
        numero: 123,
        cidade: 'Olinda',
        estado: 'PE',
        cep: '53000-000'
      },
      serie: '1º ano',
      status: 'Pendente'
    },
    {
      id: 38,
      nome: 'Pedro Vieira',
      idade: 29,
      email: 'pedro.vieira@example.com',
      telefone: '(31) 94567-8901',
      endereco: {
        rua: 'Praça da Liberdade',
        numero: 654,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30100-000'
      },
      serie: '2º ano',
      status: 'Inscrito'
    },
    {
      id: 39,
      nome: 'Quintino Matos',
      idade: 30,
      email: 'quintino.matos@example.com',
      telefone: '(91) 95678-9012',
      endereco: {
        rua: 'Rua da Independência',
        numero: 789,
        cidade: 'Ananindeua',
        estado: 'PA',
        cep: '67000-000'
      },
      serie: '3º ano',
      status: 'Inscrito'
    },
    {
      id: 40,
      nome: 'Renata Dias',
      idade: 27,
      email: 'renata.dias@example.com',
      telefone: '(71) 96789-0123',
      endereco: {
        rua: 'Rua das Flores',
        numero: 123,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '40000-000'
      },
      serie: '4º ano',
      status: 'Pendente'
    },
    {
      id: 41,
      nome: 'Sérgio Barbosa',
      idade: 28,
      email: 'sergio.barbosa@example.com',
      telefone: '(61) 97890-1234',
      endereco: {
        rua: 'Setor Norte',
        numero: 456,
        cidade: 'Taguatinga',
        estado: 'DF',
        cep: '72000-000'
      },
      serie: '5º ano',
      status: 'Inscrito'
    },
    {
      id: 42,
      nome: 'Tatiana Moraes',
      idade: 24,
      email: 'tatiana.moraes@example.com',
      telefone: '(81) 98901-2345',
      endereco: {
        rua: 'Avenida Conde da Boa Vista',
        numero: 789,
        cidade: 'Recife',
        estado: 'PE',
        cep: '50000-000'
      },
      serie: '6º ano',
      status: 'Inscrito'
    },
    {
      id: 43,
      nome: 'Ubirajara Silva',
      idade: 33,
      email: 'ubirajara.silva@example.com',
      telefone: '(31) 91234-5678',
      endereco: {
        rua: 'Rua dos Timbiras',
        numero: 123,
        cidade: 'Belo Horizonte',
        estado: 'MG',
        cep: '30100-000'
      },
      serie: '7º ano',
      status: 'Inscrito'
    },
    {
      id: 44,
      nome: 'Veronica Pires',
      idade: 26,
      email: 'veronica.pires@example.com',
      telefone: '(91) 92345-6789',
      endereco: {
        rua: 'Rua da Praia',
        numero: 456,
        cidade: 'Belém',
        estado: 'PA',
        cep: '66000-000'
      },
      serie: '8º ano',
      status: 'Inscrito'
    },
    {
      id: 45,
      nome: 'Wagner Fernandes',
      idade: 27,
      email: 'wagner.fernandes@example.com',
      telefone: '(11) 93456-7890',
      endereco: {
        rua: 'Rua Vergueiro',
        numero: 789,
        cidade: 'São Paulo',
        estado: 'SP',
        cep: '01500-000'
      },
      serie: '9º ano',
      status: 'Inscrito'
    },
    {
      id: 46,
      nome: 'Ximena Andrade',
      idade: 24,
      email: 'ximena.andrade@example.com',
      telefone: '(21) 94567-8901',
      endereco: {
        rua: 'Avenida das Américas',
        numero: 123,
        cidade: 'Rio de Janeiro',
        estado: 'RJ',
        cep: '22700-000'
      },
      serie: '1º ano',
      status: 'Pendente'
    },
    {
      id: 47,
      nome: 'Yuri Rezende',
      idade: 28,
      email: 'yuri.rezende@example.com',
      telefone: '(71) 95678-9012',
      endereco: {
        rua: 'Avenida Oceânica',
        numero: 456,
        cidade: 'Salvador',
        estado: 'BA',
        cep: '40100-000'
      },
      serie: '2º ano',
      status: 'Inscrito'
    },
    {
      id: 48,
      nome: 'Zuleica Farias',
      idade: 32,
      email: 'zuleica.farias@example.com',
      telefone: '(81) 97890-1234',
      endereco: {
        rua: 'Rua da Aurora',
        numero: 789,
        cidade: 'Recife',
        estado: 'PE',
        cep: '50000-000'
      },
      serie: '3º ano',
      status: 'Inscrito'
    },
    {
      id: 49,
      nome: 'Arthur Brito',
      idade: 32,
      email: 'arthur.brito@example.com',
      telefone: '(61) 96789-0123',
      endereco: {
        rua: 'Rua das Palmeiras',
        numero: 890,
        cidade: 'Brasília',
        estado: 'DF',
        cep: '71000-000'
      },
      serie: '4º ano',
      status: 'Inscrito'
    },
    {
      id: 50,
      nome: 'Beatriz Santos',
      idade: 26,
      email: 'beatriz.santos@example.com',
      telefone: '(91) 97890-1234',
      endereco: {
        rua: 'Rua da Paz',
        numero: 123,
        cidade: 'Belém',
        estado: 'PA',
        cep: '66000-000'
      },
      serie: '5º ano',
      status: 'Pendente'
    }
  ];
  
}
