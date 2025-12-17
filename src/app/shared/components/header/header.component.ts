import { Component, inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CommonModule, Location } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent implements OnInit {
  activeLanguage: string | null = "en";
  menuActive = false;
  animationReady = false;
  router = inject(Router);
  private translate = inject(TranslateService);

  constructor(private localStorageService: LocalStorageService, private location: Location) {

  }

  /**
   * This Function sets on initialization the language, according to the local storage
   */
  ngOnInit() {
    this.retrieveActiveStatus();
  }

  /**
   * This Function sets the current language according to the local storage key
   * If the value is null (no key is set, yet), the default language is English
   */
  retrieveActiveStatus() {
    this.retrieveFromLocalStorage();
    switch (this.activeLanguage) {
      case null:
        this.activeLanguage = 'en'
        break;
      default: this.activeLanguage
        break;
    }
    this.translate.use(this.activeLanguage);
  }

  /**
   * This Function sets the current language, for either german or english Version
   * @param language - choice between English (EN) and German (DE) Version
   */
  setActiveStatus(language: string) {
    this.activeLanguage = language;
    this.saveToLocalStorage(this.activeLanguage);
    this.translate.use(this.activeLanguage);
  }

  /**
   * This Function saves the selected language to the local storage
   * 
   * @param language - the selected language from the user
   *                 - choice between English and German 
   */
  saveToLocalStorage(language: string) {
    this.localStorageService.setItem('language', language);
  }

  /**
   * This Function retrieves the language, that is stored in the local storage
   * When the language-key is deleted, null is possible as value
   * This case is considered in this function: {@link retrieveActiveStatus()}
   */
  retrieveFromLocalStorage() {
    this.activeLanguage = this.localStorageService.getItem('language');
  }

  /**
   * This Function handles the burger-menu navigation
   * It either navigates to the menu-component, or to the previous visited page
   */
  navigateToMenu() {
    this.animationReady = true;
    if (this.router.url != '/menu') {
      this.navigateToMenupage();
    } else {
      this.menuActive = false;
      this.location.back();

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
}