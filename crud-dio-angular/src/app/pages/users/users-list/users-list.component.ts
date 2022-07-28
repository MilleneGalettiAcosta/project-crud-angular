import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/user';

@Component({
  selector: 'crud-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: IUser[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  // getAllUsers(): IUser[] {

  // }

}
