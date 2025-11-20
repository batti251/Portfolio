import { Component } from '@angular/core';
import { HeroComponent } from "./hero/hero.component";
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { ReferencesComponent } from './references/references.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [AboutMeComponent, ProjectsComponent, SkillsComponent, ReferencesComponent, ContactMeComponent, HeroComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
