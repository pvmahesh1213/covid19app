import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signin: FormGroup;

  constructor(private router: Router) {
    this.signin = new FormGroup({
      email: new FormControl('test@gmail.com', [Validators.required]),
      password: new FormControl('12345', [Validators.required])
    })
  }

  ngOnInit() {
  }

  signinSubmit() {

    if (this.signin.invalid) {
      return;
    } else {
      localStorage.setItem('userData', JSON.stringify(this.signin.value));
      this.router.navigate(['/covid/home']);
    }

  }

}
