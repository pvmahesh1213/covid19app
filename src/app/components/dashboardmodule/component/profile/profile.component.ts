import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;

  genders: any[] = [
    { value: 'male', viewValue: 'Male' },
    { value: 'female', viewValue: 'Female' }
  ];

  constructor() {
    this.profileForm = new FormGroup({
      'email': new FormControl(null, Validators.required),
      'firstname': new FormControl(null, Validators.required),
      'lastname': new FormControl(null, Validators.required),
      'phonenumber': new FormControl(null, Validators.required),
      'gender': new FormControl(null, Validators.required),
      'profileImage': new FormControl('https://southernplasticsurgery.com.au/wp-content/uploads/2013/10/user-placeholder.png'),
      'role': new FormControl('User'),
      'status': new FormControl(null),
      'uid': new FormControl(null),
      'userid': new FormControl(null),
    });
  }

  ngOnInit() {
  }

  updateProfile() {
    if (this.profileForm.invalid) {
      return;
    } else {
      console.log(this.profileForm.value);
    }
  }

}
