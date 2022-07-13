import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/auth-guard/auth-guard.service';
import { ChatComponent } from 'src/views/chat/chat.component';
import { CreatUserComponent } from 'src/views/creat-user/creat-user.component';
import { LoginComponent } from 'src/views/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'chat', component: ChatComponent, canActivate: [AuthGuardService] },
  { path: 'newuser', component: CreatUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
