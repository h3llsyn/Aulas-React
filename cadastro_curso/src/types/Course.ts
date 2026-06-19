export type Periodo = "Diurno" | "Vespertino" | "Noturno";

export interface Course {
  nome: string;
  periodo: Periodo;
}