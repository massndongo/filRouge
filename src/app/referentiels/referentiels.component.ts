import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-referentiels',
  templateUrl: './referentiels.component.html',
  styleUrls: ['./referentiels.component.css']
})
export class ReferentielsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.router.navigate(['/admin/referentiels/list-referentiels']);
  }

}
