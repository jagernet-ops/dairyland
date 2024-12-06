import { Component } from '@angular/core';
import { ProjectWidgetComponent } from "../project-widget/project-widget.component";

@Component({
  selector: 'moka',
  standalone: true,
  imports: [ProjectWidgetComponent],
  templateUrl: './moka.component.html',
  styleUrl: './moka.component.scss'
})
export class MokaComponent {

}
