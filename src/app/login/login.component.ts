import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Login } from '../Interface/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user: Login = {
  email:  '',
  password:''  
  };
  
  erro = '';
  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/users']);
      },
      error: (err) => {
        this.erro = 'O login falhou';
      }
    });
  }
}