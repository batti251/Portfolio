import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Input } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";

@Component({
    selector: 'app-submit-message',
    imports: [TranslatePipe],
    templateUrl: './submit-message.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './submit-message.component.scss'
})
export class SubmitMessageComponent {

  @Input() visible = false;

}
