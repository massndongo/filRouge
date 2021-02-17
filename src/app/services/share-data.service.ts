import { Competence } from 'src/app/models/competence';
import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class ShareDataService {
  Competence!: Competence;
  User!: User;
  private routerInfo: BehaviorSubject<Competence>;
  private routerInfos: BehaviorSubject<User>;

  constructor(
  ) {
    this.routerInfo = new BehaviorSubject<Competence>(this.Competence);
    this.routerInfos = new BehaviorSubject<User>(this.User);
  }
  setValue(newValue: any): any{
    this.routerInfo.next(newValue);
    //console.log(newValue);
  }

  getValue(): Observable<Competence>{
    return this.routerInfo.asObservable();

  }
  setValues(newValue: any): any{
    this.routerInfos.next(newValue);
    //console.log(newValue);
  }
  getValues(): Observable<User>{
    return this.routerInfos.asObservable();

  }
}
