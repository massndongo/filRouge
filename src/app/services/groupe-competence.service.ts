import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {

  api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }
  getGroupeCompetences(){
    return this.http.get(this.api + 'admin/grpecompetences');
  }
}
