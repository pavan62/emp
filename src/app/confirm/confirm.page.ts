import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  user: any;

  constructor(private  userService: UsersService) { }

  ngOnInit() {
    this.user = this.userService;
  }
}