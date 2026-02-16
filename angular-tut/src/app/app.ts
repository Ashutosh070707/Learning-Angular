import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Login, Signup],
  templateUrl: './app.html',
  // If your html code is very small, you create create inline html template also, you dont have to create a seperate file.
  // template: `<h1>{{name}}</h1>`,
  styleUrl: './app.css'
})
export class App {
  /*
  protected readonly title = signal('angular-tut');
  admin:string = "Hello Ashutosh";
  btnDisable = false; 
  
  name:String = "Ashutosh kumar"    // this is a property because this is inside a class
  differentTypes:number|string|boolean = 30;
  others:any = {}    // this can take any datatype

  handleClickEvent(){
    console.log("First function called");
    this.otherFunction();
  }

  otherFunction(){
    let age:number = 40;     // this is a variable because this is inside a function
    console.log("other function called");
  }

  updateName(){
    // this.name = 20;   // will give error because datatype of name is string
  }

  handleSum(a:number, b:number){
    console.log(a+b);
  }

  handleInput(event:any){
    console.log(event.target.value);
  }

  handleEventName(eventName:string){
    console.log(eventName);
  }

  handleMultipleEvent(event:PointerEvent|MouseEvent|InputEvent|Event){
    console.log(event.type);
  }

  toggleDisable(){
    this.btnDisable = !this.btnDisable;
  }
  */

  /*
  // Signals
  data = 0;
  count = signal(0);

  constructor(){
    effect(()=>{
      if(this.count()>10) this.count.set(0);
    })
  }

  updateData(){
    this.data++;
  }
  updateCount(){
    this.count.set(this.count()+1);
  }
  */

  /*
  // Computed Signals
  
  width = signal(0);
  height = signal(0);
  area = computed(()=> this.height()*this.width());

  updateWidth(){
    this.width.set(this.width()+5);
  }
  resetWidth(){
    this.width.set(0);
  }
  updateHeight(){
    this.height.set(this.height()+5);
  }
  resetHeight(){
    this.height.set(0);
  }
  */

/*
  // Effects

  // **NOTE** : Do not update signal values inside effect otherwise it start showing abnormal behaviour
  */

  
  /*
  // Data Type with signals
  
  data:WritableSignal<string | number | boolean> = signal<string | number | boolean>("anil");
  speed:Signal<number> = computed<number>(()=> 90);
  users:WritableSignal<string[]> = signal(['anil', 'sidhu', 'peter']);

  handleData(){
    // this.data.set("Sidhu");
    this.users.update((item)=>[...item, 'bruce']);
    console.log(this.users());
  }
  */


  /*
  // Counter App
  count = signal<number>(0);
  increment(){
    this.count.set(this.count()+1);
  }
  decrement(){
    if(this.count()>0){
      this.count.update((val)=>val-1);
    }
  }
  reset(){
    this.count.set(0);
  }
  */

  /*
  // Get & Set Input Value Using Signals
  input = signal("");

  handleInput(event:any){
    this.input.set(event.target.value);
  }

  handleDefault(){
    this.input.set("");
  }
  */

  



}
 