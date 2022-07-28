import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'crud-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  users: IUser[] = [];
  userId:any = '';
  
  constructor(private fb: FormBuilder, private userService: UserService, private actRoute: ActivatedRoute, private router: Router) {
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      lastName: '',
      age: '',
      profession: '',
    })
  }

  ngOnInit(): void {
    this.actRoute.paramMap.subscribe(params => {
      this.userId = params.get('id');
      if (this.userId !== null) {
        this.userService.getById(this.userId).subscribe(result => {
          this.userForm.patchValue({
            id: result[0].id,
            name: result[0].name,
            lastName: result[0].lastName,
            age: result[0].age,
            profession: result[0].profession,
          })
        })
      }
    });
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response;
    });
  }

  createUser() {
    this.userForm.get('id')?.patchValue(this.users.length + 1);
    this.userService.create(this.userForm.value).subscribe(result => {
      console.log(`Usuário ${result.name} ${result.lastName} cadastrado com sucesso`);
    },  () => {
      this.router.navigate(['/']);
    })
  }

  updateUser() {
    this.userService.update(this.userId, this.userForm.value).subscribe(result => {
      console.log('Usuário atualizado', result);
    }, (err) => {
      console.log('Error', err);
    }, () => {
      this.router.navigate(['/']);
    })
  }

  actionButton() {
    if (this.userId !== null) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }
}
