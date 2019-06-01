import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule  } from '@angular/fire/database';

import firebaseConfig from '../../../environments/firebase';
import { UsersComponent } from './pages/users/users/users.component';

@NgModule({
  declarations: [UsersComponent],
  exports: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
  ]
})
export class UsersModule { }
