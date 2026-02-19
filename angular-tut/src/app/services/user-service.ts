import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  userList(){
    return [
      {id:1, name:"Ashutosh", age:21, gender:'male'},
      {id:2, name:"Sulakshana", age:21, gender:'female'},
      {id:3, name:"Yashashwini", age:22, gender:'female'},
      {id:4, name:"Tanvi Dixit", age:27, gender:'female'},
      {id:5, name:"Gauri", age:20, gender:'female'},
    ]
  }
}
