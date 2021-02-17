import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.api;
  constructor(private http: HttpClient) { }
  getAll() {
    return this.http.get(this.baseUrl + 'admin/users');
}
  getById(id: any) {
      return this.http.get(this.baseUrl + 'admin/users/'+id);
  }

  create(params: any) {
      return this.http.post(this.baseUrl + 'admin/users', params);
  }

  update(id: string, params: any): Observable <any> {
      return this.http.put(this.baseUrl + 'admin/users/'+id, params);
  }

  deleted(id: any): Observable <any> {
      return this.http.delete(this.baseUrl + 'admin/users/'+id);
  }
}
