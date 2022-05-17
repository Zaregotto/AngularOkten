import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { UserDetailsInterface } from "../../models/UserDetails.interface";


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  userDetailsObj: UserDetailsInterface;
  constructor(private activatedRoute: ActivatedRoute, private router : Router) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {

      this.userDetailsObj = (this.router.getCurrentNavigation()?.extras?.state?.['data'] as UserDetailsInterface);

    });
  }

}
