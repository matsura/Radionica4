import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAuthenticated = false;

  constructor(public authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
  }
}
