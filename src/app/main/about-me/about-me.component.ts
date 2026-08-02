import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-about-me',
    imports: [MatButtonModule, TranslatePipe],
    templateUrl: './about-me.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
