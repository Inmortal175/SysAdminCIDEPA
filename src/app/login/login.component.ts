import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms'
import { AuthService } from '../services/auth/auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { map } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Loginform!: FormGroup

  constructor(private fb: FormBuilder, private authService: AuthService, private route: Router) {
    this.Loginform = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  ngOnInit(): void {

  }

login() {
    this.route.navigate(['/main'])

    if (this.Loginform.valid) {
      ( this.authService.login(this.Loginform.value.username, this.Loginform.value.password))
          .subscribe(
            (response : any) => {
              const token = response.access;
              const refresh_token = response.refresh;
              localStorage.setItem('token', token);
              console.log(token)
              console.log(refresh_token)
              localStorage.setItem('refresh', refresh_token)
              this.route.navigate(['/main'])
            },
            (error) => {
              console.log(error)
            }
        )
      } else {
        alert("Please fill all the fields")
      }
    }
}

