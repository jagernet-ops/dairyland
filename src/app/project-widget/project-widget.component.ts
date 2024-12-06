import { Component, Input } from '@angular/core';

@Component({
  selector: 'project-widget',
  standalone: true,
  imports: [],
  templateUrl: './project-widget.component.html',
  styleUrl: './project-widget.component.scss'
})
export class ProjectWidgetComponent {
  @Input() title: string | undefined;
  @Input() repo: string | undefined;
  @Input() language: string | undefined;
}
