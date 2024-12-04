import { Component } from "@angular/core";
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

import { SocialLegend } from "./social-legend/social-legend.component";
import { FooterComponent } from './footer/footer.component'
import { NavBar } from "./nav-bar/nav-bar.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    NavBar,
    SocialLegend,
    FooterComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss"
})
export class AppComponent {
  constructor() {
    const fontAwesome = document.createElement("script")
    fontAwesome.setAttribute("src", "https://kit.fontawesome.com/5a7935483d.js")
    fontAwesome.setAttribute("crossorigin", "anonymous")
    document.head.appendChild(fontAwesome)
  }
}
