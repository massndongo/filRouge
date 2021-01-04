import { Router } from '@angular/router';
import { ProfilService } from '../../services/profil.service';
import { Profil } from './../../models/profil';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  form: FormGroup;
  profile: any;
  resData: any;
  api: string = environment.api;
  file: any;

  constructor(
    public fb: FormBuilder,
    private http: HttpClient,
    private profilService: ProfilService,
    private router: Router
  ) {

    this.form = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      avatar: [this.file, Validators.required]
    })
  }

  ngOnInit(): void {
    console.log(this.getProfil());

  }
  getProfil(): any{
    this.profilService.getProfil().subscribe(
      response  =>{
        this.profile = response
      }
    );
  }
  uploadFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.file = file;
    }
  }

  get f() { return this.form.controls; }
  submitForm(){
    console.log(this.getProfil());

    var formData: any = new FormData;
    formData.append("nom", this.form.get('nom')?.value);
    formData.append("prenom", this.form.get('prenom')?.value);
    formData.append("email", this.form.get('email')?.value);
    formData.append("role", this.form.get('role')?.value);
    formData.append("username", this.form.get('username')?.value);
    formData.append("password", this.form.get('password')?.value);
    formData.append("avatar", this.file);
    console.log(formData);


    this.http.post(this.api + 'admin/users', formData).
      subscribe((data: any)=>{
        this.resData = data;
        this.router.navigate(['add-user']);
        },
        err =>{
          if (err.status == 500) {
            console.log(err);
          }

        }
      );
  }
}
