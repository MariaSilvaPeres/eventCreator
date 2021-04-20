import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit {

  profileForm:FormGroup

  // get the data from authservice
  constructor(private router:Router, private authService:AuthService) {

  }

  ngOnInit() { 
    //the form have two inputs, so we create a FormControl for each one.
    let firstName = new FormControl(this.authService.currentUser.firstName)
    let lastName = new FormControl(this.authService.currentUser.lastName)
    
    // now we need to add these controls to a form. So we use a FormGroup for that
    this.profileForm = new FormGroup({ 
      firstName: firstName,
      lastName: lastName
      
    })
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
  }

  
       
}