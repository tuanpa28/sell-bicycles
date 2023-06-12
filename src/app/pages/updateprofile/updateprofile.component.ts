import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-updateprofile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateprofileComponent implements OnInit {

  constructor(private router: Router, private userService: UserService, private formBuilder: FormBuilder,) {

  }

  formUpdateProfile: any
  ngOnInit() {
    this.formUpdateProfile = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl("", Validators.required),
    });
    const getUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (!getUser) {
      this.router.navigate(['/detail'])
      return;
    }

    this.userService.getUserProfile().subscribe((res) => {

      this.formUpdateProfile = new FormGroup({
        name: new FormControl(res.user.name, Validators.required),
        email: new FormControl(res.user.email, Validators.required),

      });
    })


  }
  onHandleSubmit() {
    console.log(this.formUpdateProfile.value);

    this.userService.updateUser(this.formUpdateProfile.value).subscribe(
      (res) => {
        this.router.navigate(['/account']);
      },
      (err) => {

      }
    );
  }

}
