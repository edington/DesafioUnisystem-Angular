import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserListComponent } from './users-lists/users-lists.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = 
[
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'createUser', component: UserCreateComponent } 


];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
