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

  constructor(
    private httpClient: HttpClient,
  ) { }

  ngOnInit(): void {

  }
  getUsers(){

    this.httpClient.get<any>(this.api + 'admin/users').subscribe(
      response => {
        this.user = response;

      }
    );
  }
  items = this.user.length;
  users = this.getUsers();
  handlePageChange(event: number) {
    this.page = event;
  }

}

