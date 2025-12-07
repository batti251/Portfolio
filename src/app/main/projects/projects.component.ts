import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit{
  videoUrls: SafeResourceUrl[] = [];
  public screenWidth: any;


 constructor(private sanitizer: DomSanitizer) {
  this.videoUrls = this.projects.map(p =>
    this.sanitizer.bypassSecurityTrustResourceUrl(p.url)
  );
}
ngOnInit() {
      this.screenWidth = window.innerWidth;
}
 @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }


  projects = [{
    title: 'Join',
    descriptionEN: 'A Group-Project implementing a Kanban System, supported by Google-Firebase, to organize tasks within a Team. Add tasks, assign certain users to it and make sure to follow the Deadlines',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    imgsrc: './../../../assets/img/thumbnail/join.svg',
    git: 'https://github.com/batti251/Join',
    url: 'https://join.sebastian-buenz.de/'
  },
  {
    title: 'Sharkie',
    descriptionEN: 'Object-Orientated 2D-Browser Game. Move Sharkie through the Deep Sea and face different Enemies.',
    skills: ['JavaScript', 'HTML', 'CSS',],
    imgsrc: './../../../assets/img/thumbnail/sharkie.svg',
    git: 'https://github.com/batti251/Sharkie',
    url: 'https://sharkie.sebastian-buenz.de/'
  },
  {
    title: 'Pokedex',
    descriptionEN: 'A Pokemon Library based on the PokéAPI. ',
    skills: ['JavaScript', 'HTML', 'CSS', 'API'],
    imgsrc: './../../../assets/img/thumbnail/pokedex.svg',
    git: 'https://github.com/batti251/Pokedex',
    url: 'https://pokedex.sebastian-buenz.de/'
  }
  ]

}
