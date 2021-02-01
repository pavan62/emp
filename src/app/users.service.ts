import { Injectable } from '@angular/core';
export interface Item{
  id:number;
  name:string;
  phone:number;
}


@Injectable({
  providedIn: 'root'
})
export class UsersService {
 pavan=[];
  private _name: string;
  private _phone: number;
  private _email:string;
  private _url:string;
  get name() {
    return this._name;
    
  }

  set name(name: string) {
    this._name = name;
    
  }

  get phone() {
    return this._phone;
  }

  set phone(phone: number) {
    this._phone= phone;
    
  }

get mail() {
  return this._email;
  
}

set mail(mail: string) {
  this._email = mail;
  
}


  
}



