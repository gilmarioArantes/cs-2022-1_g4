export interface PetInterface {
  especie: string,
  raca: string | null,
  cor: string | null,
  nome: string | null,
  idade: string | null,
  sexo: string | null,
  castrado: string | null,
  vacinas: string | null,
  foto: Buffer,
}