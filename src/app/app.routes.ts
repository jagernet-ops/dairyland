import { Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component"
import { ResumeComponent } from "./resume/resume.component"
import { AboutComponent } from "./about/about.component";

export const routes: Routes = [
  { path: "", title: "Dairyland - Home", component: NotFoundComponent },
  { path: "home", title: "Dairyland - Home", component: NotFoundComponent },
  { path: "about", title: "Dairyland - About", component: AboutComponent },
  { path: "resume", title: "Dairyland - Resume", component: ResumeComponent },
  { path: "**", title: "404 Not Found", component: NotFoundComponent }
];
