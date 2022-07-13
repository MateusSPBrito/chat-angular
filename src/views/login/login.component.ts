import { Component, OnInit } from '@angular/core';
import { loginModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: loginModel = new loginModel

  constructor(private loginService: LoginService) { }

  ngOnInit(): void { 
    window.localStorage.removeItem("name")
   }


  async loginConfirm() {
   
    try{
      const result = await this.loginService.login(this.login);
      window.location.href="/chat"

    }catch(error){
      alert("E-mail ou senha incorreto!")
    }
  }

  goCreat(){
    window.location.href="/newuser"
  }
}
