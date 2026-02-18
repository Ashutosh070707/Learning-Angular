import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  name = signal('')
  age = signal(0)
  constructor(public route:ActivatedRoute){}
  ngOnInit(){
    this.route.params.subscribe((params)=> {
      this.name.set(params['name']);
      this.age.set(params['age'])
    })
  }
}
