import { Component } from '@angular/core';
import { GhChart } from "../gh-chart/gh-chart.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [GhChart],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

}
