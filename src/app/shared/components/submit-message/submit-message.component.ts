import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
  selector: 'app-submit-message',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './submit-message.component.html',
  styleUrl: './submit-message.component.scss'
})
export class SubmitMessageComponent {

  @Input() visible = false;

}
