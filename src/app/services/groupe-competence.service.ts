import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupeCompetenceService {
  baseUrl = environment.api;
  constructor(
    private http: HttpClient
  ) { }

  getAll() {
    return this.http.get(this.baseUrl + 'admin/grpecompetences');
  }

  getById(id: any) {
      return this.http.get(this.baseUrl + 'admin/grpecompetences/'+id);
  }

  create(params: any) {
      return this.http.post(this.baseUrl + 'admin/grpecompetences', params);
  }

  update(id: string, params: any): Observable <any> {
      return this.http.put(this.baseUrl + 'admin/grpecompetences/'+id, params);
  }

  deleted(id: any): Observable <any> {
      return this.http.delete(this.baseUrl + 'admin/grpecompetences/'+id);
  }
}
