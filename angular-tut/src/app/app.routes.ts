import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';

export const routes: Routes = [
  {path:"", component:Home},
  {path:"about/:name/:age", component:About},
  {path:"about", component:About},
  {path:"profile", component:Profile},
  {path:'login', component:Login},
  // {path:'**', component:PageNotFound},  // Put this at the end so that it is hit only after matching all the other routes available
  {path:'**', redirectTo:""}  // this redirects to the home page if no routes are matched
];
