import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
})
export class EditUserComponent implements OnInit {
  langs: string[] = ['English', 'French', 'German', 'Gujarati', 'Hindi'];

  editForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    gender: new FormControl(''),
    language: new FormControl(''),
    isMarried: new FormControl(''),
  });
  constructor(
    private _cs: CrudService,
    private router: ActivatedRoute,
    private route: Router
  ) {}

  ngOnInit(): void {
    this._cs
      .getCurrentData(this.router.snapshot.params['id'])
      .subscribe((result: any) => {
        this.editForm.patchValue(result);
      });
  }
  updateData() {
    this._cs
      .updateUser(this.router.snapshot.params['id'], this.editForm.value)
      .subscribe((result) => {
        this.route.navigateByUrl('/users');
      });
  }
}
