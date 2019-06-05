import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';

@Injectable({
  providedIn: 'root'
})
export class GitlabService {

  constructor(private db:AngularFireDatabase) { }

  list(userId: String):Observable<Array<GitlabProject>> {
    return this.db
      .object(`gitlab/projects/${userId}`)
      .valueChanges()
      .pipe(
        map(values => Object.keys(values).map(key => ({ ...values[key], key }))),
      );
  }

  create(userId: String, project: GitlabProject): Promise<void> {
    const key = this.db.database.ref(`gitlab/projects/${userId}`).push().key;
    return this.db.object(`gitlab/projects/${userId}/${key}`).set(project);
  }

  update(userId: String, project: GitlabProject):Promise<any> {
    const { key, ...projectToSet } = project;
    return this.db
      .object(`gitlab/projects/${userId}/${key}`)
      .update(projectToSet);
  }

  remove(userId: String, key: String): Promise<void> {
    return this.db.object(`gitlab/projects/${userId}/${key}`).remove();
  }
}
