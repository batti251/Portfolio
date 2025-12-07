import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [MatButtonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
