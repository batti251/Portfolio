import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  
skills: string[] = [
  "HTML",
  "CSS",
  "JavaScript",
  "Angular",
  "TypeScript",
  "Git",
  "Firebase",
  "Rest-Api",
  "Scrum",
  "SQL"
]


}
