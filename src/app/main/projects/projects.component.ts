import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatButtonModule, CommonModule, TranslatePipe],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChildren('elements', { read: ElementRef })
  elements!: QueryList<ElementRef<HTMLElement>>;
  videoUrls: SafeResourceUrl[] = [];
  public screenWidth: any;
  private observer!: IntersectionObserver;

  constructor(private sanitizer: DomSanitizer) {
    this.videoUrls = this.projects.map(p =>
      this.sanitizer.bypassSecurityTrustResourceUrl(p.url)
    );
  }

  ngAfterViewInit(): void {
    this.observeElements();
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  ngOnInit() {
    this.screenWidth = window.innerWidth;
  }
  @HostListener('window:resize')
  onResize() {
    this.screenWidth = window.innerWidth;
  }


  /**
   * This Function sets up an IntersectionObserver to toggle in-view-class 
   * It's triggered when elements reach 40% visibility.
   * 
   */
  observeElements() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          let element = entry.target as HTMLElement;
          let inView = entry.intersectionRatio >= 0.4;
          element.classList.toggle('in-view', inView);
        }
      },
      { threshold: [0, 0.4, 1] }
    );
    this.elements.forEach(element => this.observer.observe(element.nativeElement));
  }


  projects = [{
    title: 'Join',
    skills: ['JavaScript', 'HTML', 'CSS', 'Firebase'],
    imgsrc: './../../../assets/img/thumbnail/join.png',
    git: 'https://github.com/batti251/Join',
    url: 'https://join.sebastian-buenz.de/'
  },
  {
    title: 'Sharkie',
    skills: ['JavaScript', 'HTML', 'CSS',],
    imgsrc: './../../../assets/img/thumbnail/sharkie.svg',
    git: 'https://github.com/batti251/Sharkie',
    url: 'https://sharkie.sebastian-buenz.de/'
  }
  ]

}
