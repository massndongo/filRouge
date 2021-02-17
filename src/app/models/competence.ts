import { GroupeCompetence } from "./groupecompetence";
import { Niveaux } from "./niveaux";

export interface Competence{
    //id: number;
    libelle: string;
    descriptif: string;
    groupeCompetences: [],
    niveaux: [Niveaux,Niveaux,Niveaux]
}
