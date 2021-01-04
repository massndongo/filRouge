import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  api: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }
  getProfil(){
    return this.http.get(this.api + 'admin/profils');
  }
  
}
