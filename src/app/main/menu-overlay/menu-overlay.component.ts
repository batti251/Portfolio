import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
@Component({
    selector: 'app-menu-overlay',
    imports: [TranslatePipe],
    templateUrl: './menu-overlay.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './menu-overlay.component.scss'
})
export class MenuOverlayComponent{

}
