import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { map } from 'rxjs';
import { SignIn } from '../models/auth/inicio_sesion';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    Loginform!: FormGroup;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private route: Router,
    ) {
        this.Loginform = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    login() {
        // this.route.navigate(['/main']);

        if (this.Loginform.valid) {
            const UserCred : SignIn = {
                usuario : this.Loginform.value.username,
                password: this.Loginform.value.password
            }

            this.authService.login(UserCred).subscribe(data =>{
                console.log(data)
            })
        } else {
            console.log('Please fill all the fields');
        }
    }
}
