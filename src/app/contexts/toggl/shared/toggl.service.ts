import { Injectable } from '@angular/core';
import TogglProject from 'src/app/shared/interfaces/TogglProject';
import { RealTimeDatabaseAccessService } from 'src/app/shared/firebase/real-time-database-access.service';

@Injectable({
  providedIn: 'root'
})
export class TogglService extends RealTimeDatabaseAccessService<TogglProject> {}
