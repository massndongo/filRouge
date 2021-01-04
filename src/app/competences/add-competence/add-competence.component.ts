import { GroupeCompetenceService } from './../../services/groupe-competence.service';
import { HttpClient } from '@angular/common/http';
import { GroupeCompetencesComponent } from './../../groupe-competences/groupe-competences.component';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(
    private http: HttpClient,
    private grpeCompetenceService: GroupeCompetenceService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      
    })
  }

  ngOnInit(): void {
  }

}
