import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-userd',
  templateUrl: './userd.page.html',
  styleUrls: ['./userd.page.scss'],
})
export class UserdPage implements OnInit {
  @Output() newItemEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  addNewItem(value: string) {
    this.newItemEvent.emit(value);
}
}