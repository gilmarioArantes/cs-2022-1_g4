export interface UserInterface {
  name: string,
  email: string,
  logradouro: string | null,
  numero: number | null,
  complemento: string | null,
  bairro: string | null,
  cidade: string | null,
  estado: string | null,
  senha: string,
  telefone: string | null,
  CEP: number | null
}