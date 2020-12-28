import { AddGroupeCompetenceComponent } from './groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { ListGroupeCompetencesComponent } from './groupe-competences/list-groupe-competences/list-groupe-competences.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { AdminComponent } from './user/admin/admin.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompetencesComponent } from './competences/competences.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'admin', component: AdminComponent,
      children: [
        { path: 'user', component: UserComponent },
        { path: 'list-profil', component: ListProfilComponent },
        { path: 'profil-sortie', component: ProfilSortieComponent },
        { path: 'competences', component: CompetencesComponent,
            children: [
              { path: 'list-competences', component: ListCompetencesComponent },
              { path: 'add-competences', component: AddCompetenceComponent },
            ]
        },
        { path: 'groupe-competences', component: GroupeCompetencesComponent,
            children: [
              { path: 'list-groupe-competences', component: ListGroupeCompetencesComponent },
              { path: 'add-groupe-competences', component: AddGroupeCompetenceComponent },
            ]
        },
      ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
