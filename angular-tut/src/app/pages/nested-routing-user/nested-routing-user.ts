import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nested-routing-user',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nested-routing-user.html',
  styleUrl: './nested-routing-user.css',
})
export class NestedRoutingUser {

}
