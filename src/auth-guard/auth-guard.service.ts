/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { LoginService } from "src/views/login/login.service";

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private loginService: LoginService) { }

    canActivate(): boolean {
        return this.loginService.returnAuth();
    }

}
