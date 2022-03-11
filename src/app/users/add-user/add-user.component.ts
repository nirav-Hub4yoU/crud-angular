import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
})
export class AddUserComponent implements OnInit {
  constructor(private storedData: CrudService, private route: Router) {}
  genders = ['male', 'female'];
  langs: string[] = ['English', 'French', 'German', 'Gujarati', 'Hindi'];

  userForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    language: new FormControl(''),
    isMarried: new FormControl(''),
  });

  ngOnInit(): void {}
  getUserFormData(data: any) {
    this.storedData.postUser(data).subscribe((data) => {
      this.userForm.reset();
      this.route.navigateByUrl('users');
    });
  }
}
