import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from '../services/crud.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  userData: any;

  constructor(
    private api: CrudService,
    private http: HttpClient,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.api.getUsers().subscribe((data) => {
      this.userData = data;
    });
  }

  //For User Delete
  deleteUser(id: any) {
    this.api.deleteUser(id).subscribe((res) => {
      for (let i = 0; i < this.userData.length; ++i) {
        if (this.userData[i].id === id) {
          this.userData.splice(i, 1);
          this.route.navigateByUrl('delete-user');
        }
      }
    });
  }
  // For Update User
  updateUser(id: any) {}
}
