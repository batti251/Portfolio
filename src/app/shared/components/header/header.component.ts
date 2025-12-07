import { Component, signal, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  activeLanguage: string = "en";
  menuActive = false;
  animationReady = false;
  router = inject(Router);
  private translate = inject(TranslateService);

  /**
   * This Function sets the current language, for either german or english Version
   * @param language - choice between English (EN) and German (DE) Version
   */
  setActiveStatus(language: string) {
    this.activeLanguage = language
    this.translate.use(language)
  }

  /**
   * This Function handles the burger-menu navigation
   */
  navigateToMenu() {
    this.animationReady = true;
    if (this.router.url != '/menu') {
      this.navigateToMenupage();
    } else {
      this.navigateToMainpage()
    }
  }

  /**
   * This Function navigates to the Menu page
   * It sets a 800ms timer, before navigation
   * It sets menuActive to true, for burger-animation (burger -> X)
   */
  navigateToMenupage() {
    this.menuActive = true
    setTimeout(() => {
      this.router.navigate(['/menu'])
    }, 800);
  }

  /**
   * This Function navigates back to the Main page
   * It sets a 800ms timer, before navigation
   * It sets menuActive to false, for burger-animation (X -> burger)
   */
  navigateToMainpage() {
    this.menuActive = false
    setTimeout(() => {
      this.router.navigate([''])
    }, 800);
  }

}