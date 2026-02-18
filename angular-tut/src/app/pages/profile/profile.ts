import { Component, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {

  id = signal(0);
  name = signal('')
  age = signal('')

  constructor(public route:ActivatedRoute, public router:Router){}
  ngOnInit(){
    this.route.queryParams.subscribe((params)=>{
      // console.log(params);
      this.id.set(params['id']),
      this.name.set(params['name']);
      this.age.set(params['age'])
    })
  }

  goToHome(){
    this.router.navigate(['/']);
  }

}
