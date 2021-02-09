import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../../services/user.service';
import { User } from './../../models/user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  page = 1;
  pageSize = 10;
  api: string = environment.api;
  user: User[] = [];
  afficheDetailUser = false;
  ous: any;
  id!: string | null;


  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
   }

  ngOnInit(): void {
  }
  getUsers(){

    this.httpClient.get<any>(this.api + 'admin/users?isDeleted=false').subscribe(
      response => {
        this.user = response;
      }
    );
  }

  deleteUser(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.deleted(this.id)
      .subscribe(
        response => {
          this.router.navigate(['../list-user/'], { relativeTo: this.route });
        },
        error => {

        }
      )
  }
  getOneUser(){
    this.id = this.route.snapshot.paramMap.get('id');
    this.userService.getById(this.id)
      .subscribe(
        response => {
          this.ous = response;
        },
        error => {
          console.log("erreur");

        }
      )
  }
  items = this.user.length;
  users = this.getUsers();
  handlePageChange(event: number) {
    this.page = event;
  }

}

