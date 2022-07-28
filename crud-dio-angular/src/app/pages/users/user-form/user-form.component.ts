import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'crud-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  
  constructor(private fb: FormBuilder, private userService: UserService) {
    this.userForm = this.fb.group({
      id: 0,
      name: '',
      lastName: '',
      age: '',
      profession: '',
    })
  }

  ngOnInit(): void {
  }

  createUser() {
    this.userService.create(this.userForm.value).subscribe(result => {
      console.log(`Usuário ${result.name} ${result.lastName} cadastrado com sucesso`);
    })
  }

}
