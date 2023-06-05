import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  formSignin = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  onHandleSubmit() {
    if (this.formSignin.valid) {
      this.authService.signin(this.formSignin.value).subscribe((data) => {
        localStorage.setItem('accessToken', JSON.stringify(data.accessToken));
        localStorage.setItem('user', JSON.stringify(data.user));
        this.router.navigate(['/admin']);
        alert('Đăng nhập thành công!');
      });
    }
  }
}
