import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule  } from '@angular/fire/database';

import firebaseConfig from '../../../environments/firebase';
import { UsersComponent } from './pages/users/users/users.component';
import { UsersRoutingModule } from './users-routing.module';
import { ThemingModule } from 'src/app/shared/theming/theming.module';
import { UserExpansionPanelComponent } from './components/user-expansion-panel/user-expansion-panel.component';

@NgModule({
  declarations: [UsersComponent, UserExpansionPanelComponent],
  exports: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ThemingModule
  ],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
