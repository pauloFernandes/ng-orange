import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RealTimeDatabaseAccessService<T> {
  private basePath;
  constructor(private db:AngularFireDatabase) { }

  initializePath(path) {
    this.basePath = path;
  }

  list() :Observable<Array<T>> {
    return this.db
      .object(this.basePath)
      .valueChanges()
      .pipe(
        map(values => Object.keys(values).map(key => ({ ...values[key], key }))),
      );
  }

  create(entity:T): Promise<void> {
    const key = this.db.database.ref(this.basePath).push().key;
    return this.db.object(`${this.basePath}/${key}`).set(entity)
  }

  update(entity): Promise<any> {
    const { key, ...entityToSet } = entity;
    return this.db
      .object(`${this.basePath}/${key}`)
      .update(entityToSet);
  }

  remove(key:String): Promise<void> {
    return this.db.object(`${this.basePath}/${key}`).remove();
  }
}
