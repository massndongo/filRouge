import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class  AuthService {

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: member-ordering
  private authUrl = 'http://127.0.0.1:8000/api/login_check';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', Authorization: 'Bearer ' +localStorage.getItem('token') })
  }
  // tslint:disable-next-line: typedef
  post(arg0: string, user: any) {
    throw new Error('Method not implemented.');
  }
  // tslint:disable-next-line: typedef
  get(arg0: string) {
    throw new Error('Method not implemented.');
  }

  // tslint:disable-next-line: jsdoc-format
  /** POST Connexion*/
  login(username: string, password: string): Observable<any>{
    return this.http.post<any>(this.authUrl, {username, password}, this.httpOptions)
  }

  // tslint:disable-next-line: jsdoc-format
  /** GET Profils*/
  getProfils(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/admin/profils', this.httpOptions)
  }

  // tslint:disable-next-line: jsdoc-format
  /** GET Users*/
  getUsers(): Observable<any>{
    return this.http.get('http://127.0.0.1:8000/api/admin/users', this.httpOptions)
  }
}
