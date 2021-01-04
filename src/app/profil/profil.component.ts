import { Profil } from './../models/profil';
import { environment } from './../../environments/environment';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  api: string = environment.api;
  profil: Profil[] = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  getProfils(){
    this.httpClient.get<any>(this.api + 'admin/profils').subscribe(
      response => {
        this.profil = response;
        console.log(this.profil);

      }
    );
  }

}
