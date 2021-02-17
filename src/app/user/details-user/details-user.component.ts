import { ShareDataService } from './../../services/share-data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.css']
})
export class DetailsUserComponent implements OnInit {


  ous: any;
  id!: string | null;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {

    this.getOneUser();
  }
  getOneUser(){
    this.shareDataService.getValues().subscribe(
      data => {
        this.ous = data;
      }
    );
  }

}
