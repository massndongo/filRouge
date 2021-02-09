import { GroupeCompetenceService } from './../../services/groupe-competence.service';
import { HttpClient } from '@angular/common/http';
import { GroupeCompetencesComponent } from './../../groupe-competences/groupe-competences.component';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.css']
})
export class AddCompetenceComponent implements OnInit {
  form!: FormGroup;
  groupeCompetences: GroupeCompetencesComponent[] = [];
  api: string = environment.api;
  groupeComp: any;
  addComp: any;

  constructor(
    private http: HttpClient,
    private grpeCompetenceService: GroupeCompetenceService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({

    })
  }

  ngOnInit(): void {
    this.getGrpeComperences();
  }
  getGrpeComperences(){
    this.grpeCompetenceService.getAll().subscribe(
      response => {
        this.groupeComp = response;
      }
    );
  }
  initForm(){
    this.addComp = this.fb.group({
      libelle: ["", Validators.required],
      descriptif: ["", Validators.required],
      groupe: ["", Validators.required],
      niveau: this.fb.array([this.addNiveau(1), this.addNiveau(2), this.addNiveau(3)])
    })
  }
  addNiveau(num: number): FormGroup{
    return this.fb.group({
      libelle: "Nivau " + num,
      critereEvaluation: ["", Validators.required],
      groupeAction: ["", Validators.required]
    })
  }
  get _niveaux(): FormArray{
    return this.addComp.get('niveau') as FormArray
  }
  saveComp(){
    
  }
}
