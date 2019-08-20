import { Component, OnInit } from '@angular/core';
import { User } from '../interfaces/user';
import { Message } from '../interfaces/message';
import { SlackService } from '../slack.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  users: Array<User>;
  selectedUsernumber: number;


  constructor(private service: SlackService) { }

  ngOnInit() {

    this.service.users.subscribe(userdata => {
      this.users = userdata;
    });

    this.service.selectedUser.subscribe(usermsg => {
      this.selectedUsernumber = usermsg;
    });
  }

  onClickSelectUsers(idx: number) {
    this.service.updateSelectedUser(idx);
  }

}
