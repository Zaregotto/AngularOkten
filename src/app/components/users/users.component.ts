import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {UserInterface} from "../../models/user.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  users: UserInterface[];

  ngOnInit(): void {
    this.userService
      .getUsers()
      .subscribe(value => this.users = value);
  }

}
