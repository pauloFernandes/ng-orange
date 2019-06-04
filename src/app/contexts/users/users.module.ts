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
import { NewUserDialogComponent } from './components/new-user-dialog/new-user-dialog.component';
import { FormsModule } from '@angular/forms';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { DeleteUserDialogComponent } from './components/delete-user-dialog/delete-user-dialog.component';

@NgModule({
  declarations: [UsersComponent, UserExpansionPanelComponent, NewUserDialogComponent, DeleteUserDialogComponent],
  exports: [
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ThemingModule,
    UiModule,
  ],
  entryComponents: [NewUserDialogComponent, DeleteUserDialogComponent],
  bootstrap: [UsersComponent]
})
export class UsersModule { }
