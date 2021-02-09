import { GroupeCompetence } from "./groupecompetence";

export interface Competence{
    id: number;
    libelle: string;
    descriptif: string;
    groupecompetence: GroupeCompetence;
}
