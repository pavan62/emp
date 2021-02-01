import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  user: any;

  constructor(private  userService: UsersService) { }

  ngOnInit() {
    this.user = this.userService;
  }
}

