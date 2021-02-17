import { ProfilService } from './../../services/profil.service';
import { AlertServiceService } from './../../services/alert-service.service';
import { UserService } from './../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { MustMatch } from 'src/app/_helpers/must-match.validators';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;
  profile: any;
  file: any;
  update: any;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private userService: UserService,
      private alertService: AlertServiceService,
      private profilService: ProfilService
  ) {}

    ngOnInit() {
      console.log("test");

      this.id = this.route.snapshot.params['id'];
      this.isAddMode = !this.id;
      this.getProfil();

      // password not required in edit mode
      const passwordValidators = [Validators.minLength(6)];
      if (this.isAddMode) {
          passwordValidators.push(Validators.required);
      }

      this.form = this.formBuilder.group({
          prenom: ['', Validators.required],
          nom: ['', Validators.required],
          username: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          role: ['', Validators.required],
          avatar: ['', Validators.required],
          password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
          confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]

      },
      {
        validator: MustMatch('password', 'confirmPassword')
    }
      );

      if (!this.isAddMode) {
        this.userService.getById(this.id)
          .subscribe(data => {
              this.update = data;
              this.form.patchValue({
                prenom: this.update.prenom,
                nom: this.update.nom,
                username: this.update.username,
                email: this.update.email,
                role: this.update.profil.libelle,
                avatar: this.file
              });


            }

          );



      }
  }
  getProfil(): any{
    this.profilService.getAllProfil().subscribe(
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
  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      if (this.isAddMode) {
          this.createUser();
      } else {
          this.updateUser();
      }
  }

  private createUser() {
    var formData: any = new FormData;
    formData.append("nom", this.form.get('nom')?.value);
    formData.append("prenom", this.form.get('prenom')?.value);
    formData.append("email", this.form.get('email')?.value);
    formData.append("role", this.form.get('role')?.value);
    formData.append("username", this.form.get('username')?.value);
    formData.append("password", this.form.get('password')?.value);
    formData.append("avatar", this.file);
      this.userService.create(formData)
        .subscribe(
          response=> {
              this.alertService.success('User added', { keepAfterRouteChange: true });
              this.router.navigate(['admin/user/list-user/details-user/'+this.id]);
            },
            error => {
              this.alertService.error(error);
              this.loading = false;
            }
        );
  }

  private updateUser() {
    this.userService.update(this.id, this.form.value)
      .subscribe(
           response => {
              this.alertService.success('User updated', { keepAfterRouteChange: true });
              this.router.navigate(['admin/user/list-user/details-user/'+this.id]);
              console.log(response);

          },
          error => {
            console.log("azerty");
              this.alertService.error(error);
              this.loading = false;
          }
      );
  }
}
