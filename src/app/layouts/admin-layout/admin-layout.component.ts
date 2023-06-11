import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  constructor(private router: Router) {}
  user = JSON.parse(localStorage.getItem('user') || '');
  name: string = this.user.name;
  email: string = this.user.email;

  logout() {
    if (window.confirm('Bạn muốn đăng xuất?')) {
      // Xóa toàn bộ dữ liệu trong localStorage
      localStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
