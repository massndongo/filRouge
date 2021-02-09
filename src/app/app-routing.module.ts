import { ApprenantComponent } from './apprenant/apprenant.component';
import { DetailReferentielComponent } from './referentiels/detail-referentiel/detail-referentiel.component';
import { AddPromoComponent } from './promos/add-promo/add-promo.component';
import { PromosComponent } from './promos/promos.component';
import { ListReferentielComponent } from './referentiels/list-referentiel/list-referentiel.component';
import { AddReferentielComponent } from './referentiels/add-referentiel/add-referentiel.component';
import { ReferentielsComponent } from './referentiels/referentiels.component';
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
import { DetailsGroupeCompetenceComponent } from './groupe-competences/details-groupe-competence/details-groupe-competence.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path:'', component: ConnexionComponent },
  { path: 'connexion', component: ConnexionComponent},
  { path: 'apprenant', component: ApprenantComponent},
  { path: 'admin', component: AdminComponent,
      children: [
        { path: 'user', component: UserComponent,
            children: [
              { path: 'list-user', component: ListUserComponent},
              { path: 'details-user/:id', component: ListUserComponent },
              { path: 'add-user', component: AddUserComponent },
              { path: 'edit/:id', component: AddUserComponent },
              { path: ':id', component: ListUserComponent },
            ]
        },
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
              { path: 'details-groupe-competence', component: DetailsGroupeCompetenceComponent },
              { path: 'add-groupe-competences', component: AddGroupeCompetenceComponent },
            ]
        },
        { path: 'referentiels', component: ReferentielsComponent,
            children: [
              { path: 'add-referentiels', component: AddReferentielComponent },
              { path: 'list-referentiels', component: ListReferentielComponent },
              { path: 'detail-referentiel', component: DetailReferentielComponent },
            ]
        },
        { path: 'promos', component: PromosComponent,
            children: [
              { path: 'add-promo', component: AddPromoComponent }
            ]
        },
      ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
