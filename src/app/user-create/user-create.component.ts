import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCreate } from '../Interface/user-create';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  imports: [CommonModule, FormsModule, RouterModule],
  styleUrls: ['./user-create.css']
})

export class UserCreateComponent {
 user: UserCreate = {
    name: '',
    email: '',
    password: ''
  };

  message= '';

  constructor(private auth: AuthService, private router: Router) {}

   createUser() {
    this.auth.createUser(this.user).subscribe({
      next: (res) => {
        this.message = "Cadastro efetuado."
      },
      error: (err) => {
        this.message = (err.error?.message || 'erro desconhecido');
      }
    });
  }

}