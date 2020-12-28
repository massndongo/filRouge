import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from '../app/user/admin/admin.component';
import { ProfilComponent } from './profil/profil.component';
import { ProfilSortieComponent } from './profil-sortie/profil-sortie.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { ListUserComponent } from './user/list-user/list-user.component';
import { ListProfilComponent } from './profil/list-profil/list-profil.component';
import { AddCompetenceComponent } from './competences/add-competence/add-competence.component';
import { CompetencesComponent } from './competences/competences.component';
import { ListCompetencesComponent } from './competences/list-competences/list-competences.component';
import { GroupeCompetencesComponent } from './groupe-competences/groupe-competences.component';
import { AddGroupeCompetenceComponent } from './groupe-competences/add-groupe-competence/add-groupe-competence.component';
import { ListGroupeCompetencesComponent } from './groupe-competences/list-groupe-competences/list-groupe-competences.component';
import { NiveauxComponent } from './niveaux/niveaux.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ConnexionComponent,
    UserComponent,
    AdminComponent,
    ProfilComponent,
    ProfilSortieComponent,
    AddUserComponent,
    ListUserComponent,
    ListProfilComponent,
    AddCompetenceComponent,
    CompetencesComponent,
    ListCompetencesComponent,
    GroupeCompetencesComponent,
    AddGroupeCompetenceComponent,
    ListGroupeCompetencesComponent,
    NiveauxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
