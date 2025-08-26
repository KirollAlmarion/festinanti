import { Role } from "./role.model";

export interface Canevas{
  nom: string,
  photos: number,
  titre: string,
  description: string,
  distribution: Role[]
}
