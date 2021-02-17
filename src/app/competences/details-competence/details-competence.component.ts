import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-competence',
  templateUrl: './details-competence.component.html',
  styleUrls: ['./details-competence.component.css']
})
export class DetailsCompetenceComponent implements OnInit {
  competence: any;

  constructor(
    private shareDataService: ShareDataService,
  ) { }

  ngOnInit(): void {
    this.getComp();
  }
  getComp(): void{
    this.shareDataService.getValue().subscribe(
      data =>{
        this.competence = data;
        console.log(this.competence);

      }
    );


  }

}
