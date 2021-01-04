import { Profil } from './../../models/profil';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
  page = 1;
  pageSize = 10;
  api: string = environment.api;
  profil: Profil[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getProfils();
  }
  getProfils(){
    this.httpClient.get<any>(this.api + 'admin/profils').subscribe(
      response => {
        this.profil = response;
      }
    );
  }
  items = this.profil.length;
  users = this.getProfils();
  handlePageChange(event: number) {
    this.page = event;
  }
}
