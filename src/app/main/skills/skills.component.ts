import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  
skills = [
  {skill: "HTML",
    color: "html",
    animation: "xRotate"
  },
  {skill: "CSS",
    color: "css",
    animation: "quad"
  },
  {skill: "JavaScript",
    color: "js",
    animation: "xRotate"
  },
  {skill: "Angular",
    color: "ng",
    animation: "xRotate"
  },
  {skill: "TypeScript",
    color: "ts",
    animation: "xRotate"
  },
  {skill: "Git",
    color: "git",
    animation: "xRotate"
  },
  {skill: "Firebase",
    animation: "rocket"
  },
  {skill: "Rest-Api",
    animation: "degRotate"
  },
  {skill: "Scrum",
    animation: "degRotate"
  },
  {skill: "SQL",
    animation: "double"
  }
]


}
