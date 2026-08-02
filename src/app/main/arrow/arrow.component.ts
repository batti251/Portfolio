import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-arrow',
    imports: [],
    templateUrl: './arrow.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './arrow.component.scss'
})
export class ArrowComponent {

@Input() reversed:boolean = false;

}
