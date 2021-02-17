import { ShareDataService } from './../../services/share-data.service';
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
  user: any=[];
  afficheDetailUser = false;
  ous: any;
  id!: string | null;


  constructor(
    private httpClient: HttpClient,
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService
  ) {

   }
  ngOnInit(): void {

  }
  getUsers(){

    this.userService.getAll().subscribe(
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
  sendSkillToDetails(skill: User): void{
    this.shareDataService.setValues(skill);
  }
  items = this.user.length;
  users = this.getUsers();
  handlePageChange(event: number) {
    this.page = event;
  }

}

