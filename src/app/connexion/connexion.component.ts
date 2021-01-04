import { LocalStorageService } from './../parametres/local-storage.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './../parametres/auth.service';
import { User } from './../models/user';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  signin = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  private role: any;
  isSubmit = false;
  message!: string;

  constructor(
    private authService: AuthService,
    private jwtHelper: JwtHelperService,
    private localStorage: LocalStorageService,
    private router: Router
    ) { }
  ngOnInit(): void {
  }

  get formControls(){
    return this.signin.controls;
  }
  seConnecter(){
    this.isSubmit = true;
    const val = this.signin.value;

    this.authService.login(val.username, val.password).subscribe(
      response => {
        const token = response.token;
        this.localStorage.set('token', token);
        this.role = this.jwtHelper.decodeToken(token).roles[0];
        console.log(this.role);

        switch (this.role) {
          case 'ROLE_ADMIN':
            this.router.navigate(['admin']);
            break;
          case 'ROLE_FORMATEUR':
            this.router.navigate(['formateur']);
            break;
          case 'ROLE_CM':
            this.router.navigate(['cm']);
            break;
          case 'ROLE_APPRENANT':
            this.router.navigate(['apprenant']);
            break;

          default:
            break;
        }
      },
      error => {

        if (error.status === 401) {
          this.message = 'Username ou Password incorrect.'
        }
      }
    );
  }
}
