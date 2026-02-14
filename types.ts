
export interface LeadData {
  nome: string;
  dataNascimento: string;
  whatsapp: string;
  email: string;
  genero: 'Masculino' | 'Feminino' | '';
  tamanhoCamiseta: string;
  tamanhoTop: string;
  tamanhoTenis: string;
}

export enum QuizStep {
  NAME = 1,
  BIRTH = 2,
  WHATSAPP = 3,
  EMAIL = 4,
  GENDER = 5,
  CLOTHING = 6,
  SHOE = 7,
  SUCCESS = 8
}
