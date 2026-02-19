import { Component, computed, effect, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Footer } from './footer/footer';
import { Child } from './child/child';
import { DisplayCount } from './display-count/display-count';
import { ControlCount } from './control-count/control-count';
import { TrimTextPipe } from './custom-pipe/trim-text-pipe';
import { Header } from './components/header/header';
import { UserDetails } from './user-details/user-details';

interface Task {
  id: string ;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, CommonModule, Login, Signup, Footer, Child, DisplayCount, ControlCount, TrimTextPipe, RouterOutlet, RouterLink, Header, UserDetails, ReactiveFormsModule],
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


  /*
  isLogin = signal(true);
  handleLogin(status:boolean){
    this.isLogin.set(!this.isLogin())
  }

  users = signal(['Anil', 'Peter', 'Sam', 'Jake']);
  userDetails = signal([
    {id: 1, fullName:"Anil Sharma", age: 36},
    {id: 2, fullName:'Peter Parker', age: 29},
    {id:3, fullName:'Sam Altman', age: 35},
    {id:4, fullName:'Jake Paul', age: 32}
  ])

  status = signal('notStarted');
  statusUpdate = new Map<number, string>([
    [0, 'notStarted'],
    [1, 'loading'],
    [2, 'success'],
    [3, 'Error']
  ]);

  handleStatusChange(){
    const randomNumber = Math.floor(Math.random()*4);
    const newStatus = this.statusUpdate.get(randomNumber) ?? 'notStarted';
    this.status.set(newStatus);
  }
  */

  /*
  // Two way data binding
  name = signal("");
  age = 20;

  user = signal({
    name: 'Ashutosh',
    age: 21,
    gender: 'Male'
  })

  updateUserData(key:string, val:string){
    this.user.update((item) =>({...item, [key]:val}))
  }

  userName = signal('ashafaf')

  get uName(){
    return this.userName();
  }
  set uName(val:string){
    this.userName.set(val);
  }

  userDetail = signal({
    name: 'Ashutosh',
    age: 21,
    gender: 'Male'
  })

  get udName(){
    return this.userDetail().name;
  }
  set udName(val:string){
    this.userDetail.update(item => ({...item, name:val}))
  }
  get udAge(){
    return this.userDetail().age;
  }
  set udAge(val:number){
    this.userDetail.update(item => ({...item, age:val}))
  }
  */

  /*
  // To Do List
  newTask = signal('');
  tasks = signal<Task[]>([]);

  addTask(){
    if(this.newTask().length>0){
      console.log(this.newTask());
      this.tasks.update((tasks)=> [...tasks, {id:crypto.randomUUID(), title: this.newTask(), completed: false}]);
      this.newTask.set('');
    }
  }

  deleteTask(id:string){
    this.tasks.update((oldTasks)=> oldTasks.filter(old => old.id != id));
  }

  toggleCompleted(id:string){
    this.tasks.update((oldTasks)=> oldTasks.map((item) => {
      if(item.id==id){
        item.completed = !item.completed;
      }
      return item;
    }));
  }
  */

  /*
  // Directives
  isLogin = signal(true);
  users = signal(['Anil', 'Peter', 'Sam', 'Jake']);
  pColor = "red";
  */


  /*
  // <!-- Pass Data from parent to child -->
  userName = signal('ashafaf')
  users = signal(['ashutosh', 'Sam', 'Tom', 'Anurag'])

  // <!-- Pass Data from child to parent -->

  selectedUserName = signal('')

  selectedUser(name:string){
    this.selectedUserName.set(name);
  }
  */

  // <!-- Global state with signals -->

  /*
  // <!-- Pipes in Angular -->
  userName="my name is ashutosh"
  title = signal('code step by step')

  name = signal('')
  amount = signal(100);
  date = new Date();

  user = signal({id:1, name:'Ashu', age:21, gender:'male'})
  */

  /*
  // <!-- Make your own pipe in angular -->

  title = signal('code step by step')
  name = signal('Hello everyone, I am a new Intern in Ciena')
  */

  // <!-- Routing in angular -->
  

  // <!-- Forms in Angular -->

  /*
  // <!-- Reactive Forms -->

  email = new FormControl("abc")
  password = new FormControl("")

  login(){
    console.log(this.email.value);
    console.log(this.password.value)
  }
  reset(){
    this.email.setValue("")
    this.password.setValue('')
  }
  */

  // <!-- Form Grouping in Reactive Forms -->
  // <!-- Reactive Forms Validation -->

  loginForm = new FormGroup({
    name: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  get name(){
    return this.loginForm.get('name')
  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }



  hnadleProfile(){
    console.log(this.loginForm.value);
  }

  reset(){
    this.loginForm.setValue({
      name:'',
      email:'',
      password:''
    })
  }
}
 