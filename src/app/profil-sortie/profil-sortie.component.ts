import { ProfilSortie } from './../models/profilSortie';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.css']
})
export class ProfilSortieComponent implements OnInit {
  page = 1;
  pageSize = 10;
  api: string = environment.api;
  profilSortie: ProfilSortie[] = [];
  table: any;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  getProfilSortie(){
    this.httpClient.get<any>(this.api + 'admin/profilsorties').subscribe(
      response => {
        this.profilSortie = response;

      }
    );
  }
  items = this.profilSortie.length;
  users = this.getProfilSortie();
  handlePageChange(event: number) {
    this.page = event;
  }

}
