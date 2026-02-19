import { Component, signal } from '@angular/core';
import { UserService } from '../../services/user-service';
import { ActivatedRoute } from '@angular/router';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-user-details',
  imports: [KeyValuePipe],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css',
})
export class UserDetails {
  userData:any = signal('')
  constructor(public userService:UserService, public route:ActivatedRoute){}

  ngOnInit(){
    const users = this.userService.userList();
    this.route.params.subscribe((params)=>{
      const filteredData = users.filter((item)=> item.id==params['id']);
      this.userData.set(filteredData[0]);
    })
  }
}
