import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  videoUrls: SafeResourceUrl[] = [];

 constructor(private sanitizer: DomSanitizer) {
  this.videoUrls = this.projects.map(p =>
    this.sanitizer.bypassSecurityTrustResourceUrl(p.url)
  );
}




  projects = [{
    title: 'Join',
    description: 'A Kanban System, to organize tasks adsfjöhfgödosaugjhgf aasdf uigoh dsouaj güoa sdfogh üoiuadfs üash gisdhg pasuohg aosid ghasiodpghj asölajsdh g asowithin a Team',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    imgsrc: './../../../assets/img/thumbnail/join.svg',
    git: 'https://github.com/batti251/Join',
    url: 'https://join.sebastian-buenz.de/'
  },
  {
    title: 'Sharkie',
    description: 'A 2D-Browser Game',
    skills: ['JavaScript', 'HTML', 'CSS',],
    imgsrc: './../../../assets/img/thumbnail/sharkie.svg',
    git: 'https://github.com/batti251/Sharkie',
    url: 'https://sharkie.sebastian-buenz.de/'
  },
  {
    title: 'Pokedex',
    description: 'A Pokemon Library based on the PokéAPI. ',
    skills: ['JavaScript', 'HTML', 'CSS', 'API'],
    imgsrc: './../../../assets/img/thumbnail/pokedex.svg',
    git: 'https://github.com/batti251/Pokedex',
    url: 'https://pokedex.sebastian-buenz.de/'
  }
  ]

}
