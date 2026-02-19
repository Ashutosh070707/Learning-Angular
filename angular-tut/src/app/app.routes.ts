import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Profile } from './pages/profile/profile';
import { Login } from './pages/login/login';
import { PageNotFound } from './pages/page-not-found/page-not-found';
import { Users } from './pages/users/users';
import { UserDetails } from './pages/user-details/user-details';
import { NestedRoutingHome } from './pages/nested-routing-home/nested-routing-home';
// import { NestedRoutingUser } from './pages/nested-routing-user/nested-routing-user';
import { NestedRoutingProfile } from './pages/nested-routing-profile/nested-routing-profile';
import { NestedRoutingSettings } from './pages/nested-routing-settings/nested-routing-settings';

export const routes: Routes = [

  /*
  // <!-- Nested/Child Routing -->
  {path:"", component:Home},
  {path:"about/:name/:age", component:About},
  {path:"about", component:About},
  {path:"profile", component:Profile},
  {path:'login', component:Login},
  {path:'users', component:Users},
  {path:'user-details/:id', component:UserDetails},
  // {path:'**', component:PageNotFound},  // Put this at the end so that it is hit only after matching all the other routes available
  {path:'**', redirectTo:""}  // this redirects to the home page if no routes are matched
  */

  
  {path:'',component:NestedRoutingHome},
  {path:'user',
    // component:NestedRoutingUser,

    // Lazy loading pages only when visited
    loadComponent:()=>import('./pages/nested-routing-user/nested-routing-user').then((c)=>c.NestedRoutingUser),
    children:[
      // line below helps us to set default page between childrens when parent endpoint is visited.
      {path:'', redirectTo:"profile", pathMatch:'full'},
      {path:'profile', component:NestedRoutingProfile},
      {path:'settings', component:NestedRoutingSettings}
    ]
  }
];
