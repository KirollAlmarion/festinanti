import { Statut } from "./statut.model";

export interface Personnage{
  nom: string,
  statut: Statut,
  masque: boolean,
  description: string
}
