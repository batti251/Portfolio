import { ApplicationConfig, inject } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import {TranslatePipe, TranslateService} from '@ngx-translate/core';

import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import {provideTranslateService, provideTranslateLoader} from "@ngx-translate/core";
import {provideTranslateHttpLoader} from "@ngx-translate/http-loader";
import {provideHttpClient} from "@angular/common/http";


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimations(),   provideHttpClient(),
    provideTranslateService({
      lang: 'en',
      fallbackLang: 'en',
      loader: provideTranslateHttpLoader({
        prefix: './../assets/i18n/',
        suffix: '.json'
      })
    }),
 ]
};
