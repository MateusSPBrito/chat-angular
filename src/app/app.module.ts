import { AuthGuardService } from './../auth-guard/auth-guard.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginComponent } from 'src/views/login/login.component';
import { LoginService } from 'src/views/login/login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatComponent } from 'src/views/chat/chat.component';
import { CreatUserComponent } from 'src/views/creat-user/creat-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ChatComponent,
    CreatUserComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthGuardService, HttpClientModule, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
