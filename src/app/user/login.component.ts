import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "./auth.service";


@Component ({
    templateUrl: 'login.component.html'
})

export class LoginComponent {

    constructor(private authService: AuthService, private router:Router) {

    }
    
    userName:string
    password:string;
    
    login(formValues:any) {
        this.authService.loginUser(formValues.username, formValues.password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events']) 
    }
}
