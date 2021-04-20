import { Injectable } from "@angular/core";
import { IUser } from './user.model'

@Injectable()

export class AuthService { 

    currentUser:IUser;
    loginUser(username: string, password:string) {
        this.currentUser = {
            id: 1, 
            userName: 'Papa',
            firstName: 'John',
            lastName: 'Papa'
            
        }
    }

    // autenticator method that returns true 
    isAuthenticated() {
        return !!this.currentUser;
    }
}