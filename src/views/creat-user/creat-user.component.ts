import { Component, OnInit } from '@angular/core';
import { loginModel } from '../login/login.model';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-creat-user',
  templateUrl: './creat-user.component.html',
  styleUrls: ['./creat-user.component.scss']
})
export class CreatUserComponent implements OnInit {

  newLogin: loginModel = new loginModel;

  constructor(private loginService: LoginService) { }

  ngOnInit(): void {  }

  creatUser() {
    this.loginService.newUser(this.newLogin).subscribe(user => {
      this.newLogin = new loginModel();
    }, err => {
      console.log('erro ao criar', err)}
    )
    window.location.href = "/login"
  }

  cancelCreat() {
    this.newLogin = {
      name: '',
      username: '',
      password: ''
    }
    window.location.href = "/login"
  }
}
