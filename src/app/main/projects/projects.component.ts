import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {




  projects = [{
    title: 'Join',
    description: 'A Kanban System, to organize tasks adsfjöhfgödosaugjhgf aasdf uigoh dsouaj güoa sdfogh üoiuadfs üash gisdhg pasuohg aosid ghasiodpghj asölajsdh g asowithin a Team',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    imgsrc: './../../../assets/img/thumbnail/join.svg',
    git: 'https://github.com/batti251/Join',
    url: 'https://github.com/batti251/Join'
  },
  {
    title: 'Sharkie',
    description: 'A 2D-Browser Game',
    skills: ['JavaScript', 'HTML', 'CSS',],
    imgsrc: './../../../assets/img/thumbnail/sharkie.svg',
    git: 'https://github.com/batti251/Sharkie',
    url: 'https://github.com/batti251/Join'
  },
  {
    title: 'Pokedex',
    description: 'A Pokemon Library based on the PokéAPI. ',
    skills: ['JavaScript', 'HTML', 'CSS', 'API'],
    imgsrc: './../../../assets/img/thumbnail/pokedex.svg',
    git: 'https://github.com/batti251/Pokedex',
    url: 'https://github.com/batti251/Join'
  }
  ]

}
