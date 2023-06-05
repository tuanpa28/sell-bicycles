import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss'],
})
export class AdminLayoutComponent {
  user = JSON.parse(localStorage.getItem('user') || '');
  name: string = this.user.name;
  email: string = this.user.email;
}
