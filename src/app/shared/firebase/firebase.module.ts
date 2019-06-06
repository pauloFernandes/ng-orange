import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RealTimeDatabaseAccessService } from './real-time-database-access.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    RealTimeDatabaseAccessService
  ]
})
export class FirebaseModule { }
