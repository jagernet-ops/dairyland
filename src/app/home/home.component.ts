import { Component } from '@angular/core';
import { ProjectWidgetComponent } from "../project-widget/project-widget.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProjectWidgetComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
