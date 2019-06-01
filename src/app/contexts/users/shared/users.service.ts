import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import User from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db:AngularFireDatabase) { }

  list():Observable<Array<User>> {
    return this.db
      .object('users')
      .valueChanges()
      .pipe(
        map(values => Object.keys(values).map(key => ({ ...values[key], key }))),
      );
  }
}
