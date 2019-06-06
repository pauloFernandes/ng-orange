import { Injectable } from '@angular/core';
import GitlabProject from 'src/app/shared/interfaces/GitlabProject';
import { RealTimeDatabaseAccessService } from 'src/app/shared/firebase/real-time-database-access.service';

@Injectable({
  providedIn: 'root'
})
export class GitlabService extends RealTimeDatabaseAccessService<GitlabProject> {}
