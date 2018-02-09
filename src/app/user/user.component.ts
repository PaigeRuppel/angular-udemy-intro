import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
    username = '';
    creationStatus = 'User has not been created';
    allowNewUser = false;

  constructor() { }

  ngOnInit() {
    this.allowNewUser = this.username.length > 0;
  }

  onCreateUser() {
    this.username = '';
  }

  onUpdateUserName(event: any) {
    this.username = (<HTMLInputElement>event.target).value;
  }

}
