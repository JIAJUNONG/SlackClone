import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../app/interfaces/user';
import { Message } from '../app/interfaces/message';

​

@Injectable({
  providedIn: 'root'
})
export class SlackService {
  users = new BehaviorSubject<User[]>([
    {
      name: 'John',
      email: 'john@example.com',
      chat: [
        {
          text: 'Hi there!',
          sender: 'Jane'
        },
        {
          text: 'hihi',
          sender: 'John'
        }
      ]
    },
    {
      name: 'Super',
      email: 'super@example.com',
      chat: [
        {
          text: 'Hi there!',
          sender: 'Super'
        },
        {
          text: 'hihi',
          sender: 'John'
        }
      ]
    },
    {
      name: 'JJ',
      email: 'JJ@example.com',
      chat: [
        {
          text: 'Hi there!',
          sender: 'JJ'
        },
        {
          text: 'hihi',
          sender: 'John'
        }
      ]
    }
  ]);
​
  selectedUser = new BehaviorSubject<number>(0);
​
  constructor() { }
​
  createMessage(message: string, chatUsername: string) {
    // message: the text entered into the form
    // charUsername: the name of the user who you are chatting with
​
    // create a message object
    // set the sender (hardcode a username for now)
    const fullMessage: Message = {
      text: message,
      sender: 'Me'
    };
​
    // find the user
    const users = this.users.getValue();
    // get the chats for that user
    // add the newly created message to the array of chat messages under that user
    // .next the updated user
    // this.users.next(updatedUsers);
  }
​
  updateSelectedUser(idx: number) {
​     this.selectedUser.next(idx);
  }


}
