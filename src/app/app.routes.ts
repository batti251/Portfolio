import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ImprintComponent } from './imprint/imprint.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { MenuOverlayComponent } from './main/menu-overlay/menu-overlay.component';

export const routes: Routes = [
    { path: '', component: MainComponent}, 
    { path: 'menu', component: MenuOverlayComponent, title: "Menu"}, 
    { path: 'imprint', component: ImprintComponent, title: "Imprint"},
    { path: 'privacy', component: PrivacyComponent, title: "Privacy Policy"}  
];
