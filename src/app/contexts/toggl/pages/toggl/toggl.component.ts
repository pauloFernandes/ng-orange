import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatDialog } from '@angular/material';
import { DeleteProjectDialogComponent } from '../../components/delete-project-dialog/delete-project-dialog.component';
import { NewProjectDialogComponent } from '../../components/new-project-dialog/new-project-dialog.component';
import TogglProject from 'src/app/shared/interfaces/TogglProject';
import { TogglService } from '../../shared/toggl.service';

@Component({
  selector: 'app-toggl',
  templateUrl: './toggl.component.html',
  styleUrls: ['./toggl.component.css']
})
export class TogglComponent implements OnInit {

  projects: Observable<Array<TogglProject>>
  userId: String = '';
  constructor(
    private route: ActivatedRoute,
    private togglService: TogglService,
    public dialog:MatDialog
  ) { }

  ngOnInit() {
    this.projects = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.userId = params.get('userId')
        this.togglService.initializePath(`toggl/projects/${this.userId}`);
        return this.togglService.list();
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
      .subscribe((project: TogglProject) => {
        return this.saveProject(project);
      })
  }

  create(project: TogglProject) {
    return this.togglService.create(project);
  }

  saveProject(project) {
    return this.togglService.update(project);
  }

  confirmRemoveProject(key:String):void {
    this.dialog
      .open(DeleteProjectDialogComponent, {
        width: '400px',
        data: { }
      })
      .afterClosed()
      .subscribe(shouldRemove => {
        return shouldRemove && this.togglService.remove(key);
      });
  }
}
