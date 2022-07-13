import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable } from "rxjs";
import { loginModel } from "./login.model";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient) {    }

    newUser(login:loginModel):Observable<any>{
        console.log (login)
        return this.http.post('http://localhost:3000/user/',login)
    }

    async login(login: any){
        const result = await this.http.post<any>('http://localhost:3000/user/login',login).toPromise();
        if(result && result.name){
            window.localStorage.setItem('name',result.name);
            return true;
        }
        return false;
    }

    returnAuth(){
        if(window.localStorage.getItem("name")){
            return true
        }else{
            return false
        }
        
    }
}