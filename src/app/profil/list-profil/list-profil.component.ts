import { ProfilService } from './../../services/profil.service';
import { Profil } from './../../models/profil';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  profils: any = [];
  profil:any;
  id!: string | null;
  afficheDetailProfil = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private profilService: ProfilService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id');
  }
  getProfils(){
    this.profilService.getAllProfil().subscribe(
      response => {
        this.profils = response;
      }
    );
  }

  getOneProfil(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.profilService.getById(this.id)
      .subscribe(
        response => {
          this.profil = response;
          console.log(this.profil);

        },
        error => {
          console.log("erreur");
          console.log(this.id);

        }
      )
  }
  items = this.profils.length;
  users = this.getProfils();
  handlePageChange(event: number) {
    this.page = event;
  }
}
