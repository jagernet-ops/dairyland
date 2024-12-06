import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component"
import { ResumeComponent } from "./resume/resume.component"
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from './home/home.component'
import { ProjectComponent } from './project/project.component'
import { UxGameProjectComponent } from './ux-game-project/ux-game-project.component'
import { MokaComponent } from './moka/moka.component'

export const routes: Routes = [
  { path: "", title: "Dairyland - Home", component: HomeComponent },
  { path: "home", title: "Dairyland - Home", component: HomeComponent },
  { path: "about", title: "Dairyland - About", component: AboutComponent },
  { path: "resume", title: "Dairyland - Resume", component: ResumeComponent },
  {
    path: "project",
    title: "Dairyland - Projects", component: ProjectComponent,
    children: [
      {
        path: "ux-game",
        title: "Dairyland - Projects: UX Game Project",
        component: UxGameProjectComponent
      },
      {
        path: "moka",
        title: "Dairyland - Projects: Moka",
        component: MokaComponent
      }
    ]
  },
  { path: "**", title: "404 Not Found", component: NotFoundComponent }
];
