import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';
import { GitlabService } from '../../shared/gitlab.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { NewProjectDialogComponent } from '../../components/new-project-dialog/new-project-dialog.component';
import { DeleteProjectDialogComponent } from '../../components/delete-project-dialog/delete-project-dialog.component';

@Component({
  selector: 'app-gitlab',
  templateUrl: './gitlab.component.html',
  styleUrls: ['./gitlab.component.css']
})
export class GitlabComponent implements OnInit {

  projects: Observable<Array<GitlabProject>>
  userId: String = '';
  constructor(
    private route: ActivatedRoute,
    private gitlabService: GitlabService,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.projects = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId')
        return this.gitlabService.list(this.userId)
      }),
    );
  }

  new():void {
    this.dialog
      .open(NewProjectDialogComponent, {
        width: '400px',
        data: {}
      })
      .afterClosed()
      .subscribe((project: GitlabProject) => {
        return this.create(project);
      })
  }

  create(project: GitlabProject) {
    return this.gitlabService.create(this.userId, project);
  }

  saveProject(project) {
    console.log(project);
  }

  confirmRemoveProject(key:String):void {
    this.dialog
      .open(DeleteProjectDialogComponent, {
        width: '400px',
        data: { }
      })
      .afterClosed()
      .subscribe(() => {
        return this.gitlabService.remove(this.userId, key);
      });
  }

  removeProject(project) {
    console.log(project);
  }
}
