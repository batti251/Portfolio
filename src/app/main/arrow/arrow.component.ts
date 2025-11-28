import { Component, Input} from '@angular/core';
import { NgOptimizedImage } from "@angular/common";

@Component({
  selector: 'app-arrow',
  standalone: true,
  imports: [ NgOptimizedImage],
  templateUrl: './arrow.component.html',
  styleUrl: './arrow.component.scss'
})
export class ArrowComponent {

@Input() reversed:boolean = false;

}
