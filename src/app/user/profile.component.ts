import { Component, OnInit } from '@angular/core'
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: 'profile.component.html',
  styles: [`
    em { float: right; color: #E05C65; padding-left: 10px; }
    .error input { Background-color: #E3C3C5; }

    /* There isn't a css standart for styling placeholders, so we have to do one for each browser */

    . error ::-webkit-input-placeholder { color: #999; }
    . error ::-moz-placeholder { color: #999; }
    . error :-moz-placeholder { color: #999; }
    . error :ms-input-placeholder { color: #999; }
  `
  ]
})

export class ProfileComponent implements OnInit {

  profileForm:FormGroup;
  firstName: FormControl;
  lastName: FormControl;

  // get the data from authservice
  constructor(private router:Router, private authService:AuthService) {
    //the form have two inputs, so we create a FormControl for each one.

    this.firstName = new FormControl(this.authService.currentUser.firstName, [Validators.required, Validators.pattern('[a-zA-Z].*')])
    this.lastName = new FormControl(this.authService.currentUser.lastName, [Validators.required, Validators.pattern('[a-zA-Z].*')])

    // now we need to add these controls to a form. So we use a FormGroup for that
    this.profileForm = new FormGroup({
      firstName: this.firstName,
      lastName: this.lastName

    })

  }

  ngOnInit() {



  }

  validateFirstName() {
    return this.firstName.valid || this.firstName.touched;
  }

  validateLastName() {
    return this.lastName.valid || this.lastName.touched
  }

  cancel() {
    this.router.navigate(['events'])
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
    this.authService.updateCurrentUser(formValues.firstName, formValues.lastName)
    this.router.navigate(['events'])
    }
  }






}
