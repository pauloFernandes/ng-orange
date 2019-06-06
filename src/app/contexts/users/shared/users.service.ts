import { Injectable } from '@angular/core';
import User from '../../../shared/interfaces/User';
import { RealTimeDatabaseAccessService } from 'src/app/shared/firebase/real-time-database-access.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService extends RealTimeDatabaseAccessService<User> {}
