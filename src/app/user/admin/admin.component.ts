import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { JWTTokenService } from './../../parametres/jwt-helper.service';
import jwt_decode from 'jwt-decode';

import { JwtHelperService } from '@auth0/angular-jwt';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  token: any;
  tok: any;
  username: any;
  role: any;
  admin: any;
  api: string = environment.api;
  constructor(private router: Router, private jwtService: JwtHelperService, private jwtToken: JWTTokenService,
              private httpClient: HttpClient
    ) { }

  ngOnInit(): void {
    this.pageListeUser();
    this.token = localStorage.getItem('token');
    this.tok = this.jwtToken.decodeToken(this.token);
    this.role = this.tok.roles[0];
    this.username = this.tok.username;
    this.getAdmin();



  }
  getAdmin(){
    this.httpClient.get<any>(this.api + 'admin/users?username=' +this.username).subscribe(
      response => {
        this.admin = response;

      }
    );
  }
  pageListeUser(){
    this.router.navigate(['/admin/user/list-user']);
  }



}
