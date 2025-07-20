import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserResponse } from '../Interface/user-response';

@Component({
  selector: 'app-users-lists',
  templateUrl: './users-lists.component.html',
  styleUrls: ['./users-lists.component.css'],
   imports: [CommonModule, RouterModule] 

})
export class UserListComponent implements OnInit {
  users: UserResponse[] = [];

 constructor(private auth: AuthService, private router: Router) {}

 

  ngOnInit(): void {
    this.loadUsers();
  }



loadUsers(): void {
  this.auth.getUsersApi().subscribe({
    next: (data: UserResponse[]) => {
      this.users = data;     
    },
    error: (err) => {
      console.error('Erro ao carregar usuários:', err);
    }
  });
}


}
