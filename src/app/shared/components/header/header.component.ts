import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { inject } from '@angular/core';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent{
  activeLanguage:string = "en";
  menuActive = false;
  animationReady = false;
  router = inject(Router);

  /**
   * This Function sets the current language, for either german or english Version
   * @param language - choice between 
   */
  setActiveStatus(language:string){
    this.activeLanguage = language
  }

  navigateToMenu(){
     this.animationReady = true;
    if (this.router.url != '/menu') {
        this.menuActive = true
      setTimeout(() => {
        this.router.navigate(['/menu'])
      }, 800);
    } else {
        this.menuActive = false
      setTimeout(() => {
        this.router.navigate([''])
      }, 800);
    }
  }
}

