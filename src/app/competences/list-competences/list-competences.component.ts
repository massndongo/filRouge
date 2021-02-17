import { Competence } from 'src/app/models/competence';
import { ShareDataService } from './../../services/share-data.service';
import { GroupeCompetenceService } from './../../services/groupe-competence.service';
import { CompetenceService } from './../../services/competence.service';
import { Component, OnInit } from '@angular/core';
import { GroupeCompetence } from 'src/app/models/groupecompetence';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-competences',
  templateUrl: './list-competences.component.html',
  styleUrls: ['./list-competences.component.css']
})
export class ListCompetencesComponent implements OnInit {
  competence: any ;
  id!: string | null;
  groupeCompetence: any=[];
  skills: any;

  constructor(
    private competenceService: CompetenceService,
    private groupecompetenceService: GroupeCompetenceService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllGroupeComp();
  }
  getAllGroupeComp(){
    this.groupecompetenceService.getAll().subscribe(
      response => {
        this.groupeCompetence = response

      }
    );
  }
  getCompetenceInGrpeComp(groupe: GroupeCompetence){
    this.id = this.route.snapshot.paramMap.get('id');
    this.groupecompetenceService.getCompInGrpe(this.id).subscribe(
      data => {
        this.competence = data
        console.log(data);

      }
    );
  }
  getGrpSkillToDetails(id: any): any{
    this.groupecompetenceService.getCompInGrpe(id).subscribe(
      response => {
        this.skills = response;
        this.skills = this.skills.competences;
        console.log(this.skills);



      },
      error => {
        console.log('error');
      }
    );
  }
  sendSkillToDetails(skill: Competence): void{
    this.shareDataService.setValue(skill);
  }
}
