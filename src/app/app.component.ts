import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

import { FooterComponent } from './footer/footer.component'
import { NavBar } from "./nav-bar/nav-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavBar,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
}
