import { Component, OnInit } from '@angular/core';
import { GroupeCompetenceService } from 'src/app/services/groupe-competence.service';

@Component({
  selector: 'app-list-groupe-competences',
  templateUrl: './list-groupe-competences.component.html',
  styleUrls: ['./list-groupe-competences.component.css']
})
export class ListGroupeCompetencesComponent implements OnInit {
  grpeCompetences: any;

  constructor(
    private grpeCompService: GroupeCompetenceService
  ) { }

  ngOnInit(): void {
    this.getAllGrpeCompetences();
  }

  getAllGrpeCompetences(){
    this.grpeCompService.getAll().subscribe(
      response => {
        this.grpeCompetences = response;
        console.log(this.grpeCompetences);

      }
    );
  }
}
