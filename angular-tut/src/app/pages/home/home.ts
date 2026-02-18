import { Component, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  userData = signal({id:10, name:'Peter', age:34})
  constructor(public router:Router){} // constructor is used for dependency injection
  goToProfilePage(){
    this.router.navigate(['profile'])
  }
}
