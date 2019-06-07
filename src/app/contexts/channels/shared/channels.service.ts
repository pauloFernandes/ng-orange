import { Injectable } from '@angular/core';
import Slack from 'src/app/shared/interfaces/Slack';
import { RealTimeDatabaseAccessService } from 'src/app/shared/firebase/real-time-database-access.service';

@Injectable({
  providedIn: 'root'
})
export class ChannelsService extends RealTimeDatabaseAccessService<Slack> {}
