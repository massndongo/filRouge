import { GroupeCompetence } from './../../models/groupecompetence';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GroupeCompetenceService } from './../../services/groupe-competence.service';
import { CompetenceService } from './../../services/competence.service';
import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-groupe-competence',
  templateUrl: './add-groupe-competence.component.html',
  styleUrls: ['./add-groupe-competence.component.css']
})
export class AddGroupeCompetenceComponent implements OnInit {
  competences: any;
  form!: FormGroup;
  ajoutCompetence:boolean = false;

  constructor(
    private shareDataService: ShareDataService,
    private competenceService: CompetenceService,
    private grpeCompService: GroupeCompetenceService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.getAllCompetences();
    if (!this.ajoutCompetence) {
      this.form = this.fb.group({

        libelle: ["", Validators.required],
        descriptif: ["", Validators.required],
        competences: ["", Validators.required]
      });
    }else{
      this.form = this.fb.group({

        libelle: ["", Validators.required],
        descriptif: ["", Validators.required],
        libelleComp: ["", Validators.required],
        descriptifComp: ["", Validators.required],
        groupeCompetences: ["", Validators.required],
        groupeAction1: ["", Validators.required],
        critereEvaluation1: ["", Validators.required],
        groupeAction2: ["", Validators.required],
        critereEvaluation2: ["", Validators.required],
        groupeAction3: ["", Validators.required],
        critereEvaluation3: ["", Validators.required],
      });
    }
  }
  getAllCompetences(){
    this.competenceService.getAll().subscribe(
      response => {
        this.competences = response;
        console.log(this.competences);

      }
    );
  }
  showNewSkill(){
    this.ajoutCompetence = !this.ajoutCompetence;
  }
  onAddGrpeCompetence(){
    if (!this.ajoutCompetence) {
      let tab:any = [];
      for (const iterator of this.form.value.competences) {
        tab.push({id: iterator});
      }
      const grpeCompetence: GroupeCompetence = {
        libelle: this.form.value.libelle,
        descriptif: this.form.value.descriptif,
        competences: tab

      }
      console.log(this.form);

      this.grpeCompService.create(grpeCompetence).subscribe(
        data => {
          console.log(data);
          console.log('succes');


        }
      );

    }else{
      this.form = this.fb.group({

        libelle: ["", Validators.required],
        descriptif: ["", Validators.required],
        libelleComp: ["", Validators.required],
        competences: ["", Validators.required],
        descriptifComp: ["", Validators.required],
        groupeCompetences: ["", Validators.required],
        groupeAction1: ["", Validators.required],
        critereEvaluation1: ["", Validators.required],
        groupeAction2: ["", Validators.required],
        critereEvaluation2: ["", Validators.required],
        groupeAction3: ["", Validators.required],
        critereEvaluation3: ["", Validators.required],
      });
      console.log(this.form.value);

      let tab:any = [];
      for (const iterator of this.form.value.competences) {
        tab.push({id: iterator});
      }
      const grpeCompetence: GroupeCompetence = {
        libelle: this.form.value.libelle,
        descriptif: this.form.value.descriptif,
        competences: [

          {
            libelleComp: this.form.value.libelleComp,
            descriptifComp: this.form.value.descriptifComp,
            niveaux: [
              {
                libelle: "niveau 1",
                groupeAction: this.form.value.groupeAction1,
                critereEvaluation: this.form.value.critereEvaluation1

              },
              {
                libelle: "niveau 2",
                groupeAction: this.form.value.groupeAction2,
                critereEvaluation: this.form.value.critereEvaluation2

              },
              {
                libelle: "niveau 3",
                groupeAction: this.form.value.groupeAction3,
                critereEvaluation: this.form.value.critereEvaluation3

              },
            ]
          }
        ]

      }
      console.log(this.form);

      this.grpeCompService.create(grpeCompetence).subscribe(
        data => {
          console.log(data);
          console.log('succes');


        }
      );

    }

  }

}
