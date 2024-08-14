import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dairyland';
  constructor() {
    /*
    const fontAwesome = document.createElement('script')
    fontAwesome.setAttribute('src', '')
    fontAwesome.setAttribute('crossorigin', 'anonymous')
    document.head.appendChild(fontAwesome)
    */
  }
}
