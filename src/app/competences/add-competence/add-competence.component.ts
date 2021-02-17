import { ShareDataService } from './../../services/share-data.service';
import { CompetenceService } from './../../services/competence.service';
import { GroupeCompetenceService } from './../../services/groupe-competence.service';
import { HttpClient } from '@angular/common/http';
import { GroupeCompetencesComponent } from './../../groupe-competences/groupe-competences.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Competence } from 'src/app/models/competence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  api: string = environment.api;
  groupeComp: any ;
  addComp!: FormGroup;
  submitted = false;
  loading = false;
  isAddMode!: boolean;
  id!: string;
  update: any;
  competence: any;

  


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private competenceService: CompetenceService,
    private http: HttpClient,
    private shareDataService: ShareDataService,
    private grpeCompetenceService: GroupeCompetenceService,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.isAddMode = !this.id;
    this.getGrpeComperences();

    this.addComp = this.fb.group({

      libelle: ["", Validators.required],
      descriptif: ["", Validators.required],
      groupeCompetences: ["", Validators.required],
      groupeAction1: ["", Validators.required],
      critereEvaluation1: ["", Validators.required],
      groupeAction2: ["", Validators.required],
      critereEvaluation2: ["", Validators.required],
      groupeAction3: ["", Validators.required],
      critereEvaluation3: ["", Validators.required],

    });
    if (!this.isAddMode) {
      this.competenceService.getById(this.id).subscribe(
      response => {
        this.update = response;
        console.log(this.update);


        this.addComp.patchValue({
          libelle: this.update.libelle,
          descriptif: this.update.descriptif,
          groupeCompetences: this.update.groupeCompetences,
          groupeAction1: this.update.niveaux[0].groupeAction,
          critereEvaluation1:this.update.niveaux[0].critereEvaluation,
          groupeAction2: this.update.niveaux[1].groupeAction,
          critereEvaluation2: this.update.niveaux[1].critereEvaluation,
          groupeAction3: this.update.niveaux[1].groupeAction,
          critereEvaluation3: this.update.niveaux[1].critereEvaluation

        });
        console.log(this.addComp.value);


      },
      erreur => {
        console.log(erreur);

      }
    );
    }
  }
  getGrpeComperences(){
    this.grpeCompetenceService.getAll().subscribe(
      response => {
        this.groupeComp = response;
      }
    );
  }
  // initForm(){
  //   this.addComp = this.fb.group({
  //     libelle: ["", Validators.required],
  //     descriptif: ["", Validators.required],
  //     groupeCompetences: ["", Validators.required],
  //     groupeAction1: ["", Validators.required],
  //     critereEvaluation1: ["", Validators.required],
  //     groupeAction2: ["", Validators.required],
  //     critereEvaluation2: ["", Validators.required],
  //     groupeAction3: ["", Validators.required],
  //     critereEvaluation3: ["", Validators.required],
  //   })
  // }
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid

    this.loading = true;
    if (this.isAddMode) {
        this.onAddComp();
    } else {
        this.updateCompetence();
    }
}
  private onAddComp(){
    //console.log(this.addComp.value.groupeCompetences);
    let tab:any = [];
    for (const iterator of this.addComp.value.groupeCompetences) {
      tab.push({id: iterator});
    }
    const competence: Competence = {
      libelle: this.addComp.value.libelle,
      descriptif: this.addComp.value.descriptif,
      groupeCompetences: tab,
      niveaux: [
        {
          libelle: "niveau 1",
          groupeAction: this.addComp.value.groupeAction1,
          critereEvaluation: this.addComp.value.critereEvaluation1

        },
        {
          libelle: "niveau 2",
          groupeAction: this.addComp.value.groupeAction2,
          critereEvaluation: this.addComp.value.critereEvaluation2

        },
        {
          libelle: "niveau 3",
          groupeAction: this.addComp.value.groupeAction3,
          critereEvaluation: this.addComp.value.critereEvaluation3

        },
      ]
    }
    //console.log(competence);

    this.competenceService.create(competence).subscribe(
      response => {
        this.router.navigate(['admin/competences/list-competences']);
        //console.log(response);
      },
      erreur =>{
        console.log(erreur);

      }
    )
  }
  private updateCompetence(){

    let tab:any = [];
    for (const iterator of this.addComp.value.groupeCompetences) {
      tab.push({id: iterator});
    }
    this.addComp.value.groupeCompetences = tab;
    this.competence = this.addComp.value;
     console.log(tab);
    const competence: Competence = {
      libelle: this.addComp.value.libelle,
      descriptif: this.addComp.value.descriptif,
      groupeCompetences: tab,
      niveaux: [
        {
          libelle: "niveau 1",
          groupeAction: this.addComp.value.groupeAction1,
          critereEvaluation: this.addComp.value.critereEvaluation1

        },
        {
          libelle: "niveau 2",
          groupeAction: this.addComp.value.groupeAction2,
          critereEvaluation: this.addComp.value.critereEvaluation2

        },
        {
          libelle: "niveau 3",
          groupeAction: this.addComp.value.groupeAction3,
          critereEvaluation: this.addComp.value.critereEvaluation3

        },
      ]
    }
    console.log(competence);

    this.competenceService.update(this.id, competence).subscribe(
      response => {
        console.log(response);

      },
      erreur => {
        console.log(erreur);

      }
    );

  }
}
