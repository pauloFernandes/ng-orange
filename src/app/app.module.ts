import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersModule } from './contexts/users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ThemingModule } from './shared/theming/theming.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    BrowserAnimationsModule,
    ThemingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
