import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'crud-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: IUser[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    }, (err) => {
      console.log('Error ao executar', err);
    });
  }

  deleteUser(id: number): void {
    this.userService.delete(id).subscribe(response => {
      console.log('Usuário excluido');
    }, (err) => {
      console.log('ERROR', err.status);
    }, () => {
      this.getAllUsers();
    })
  }

}
