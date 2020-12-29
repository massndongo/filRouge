import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groupe-competences',
  templateUrl: './groupe-competences.component.html',
  styleUrls: ['./groupe-competences.component.css']
})
export class GroupeCompetencesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/admin/groupe-competences/list-groupe-competences'])
  }

}
