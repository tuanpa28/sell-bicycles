import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;
  constructor(private router: Router, private userService: UserService,) { }

  ngOnInit() {
    const getUser = JSON.parse(localStorage.getItem('user') || '');
    if (!getUser) {
      this.router.navigate(['/detail'])
      return;
    }
    this.userService.getUserProfile().subscribe((res) => {
      this.user = res.user
    })
  }
  updateUser(id: string) {
    this.router.navigate(['/account/' + id])
  }

}
