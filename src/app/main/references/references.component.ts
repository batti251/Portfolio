import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-references',
    imports: [TranslatePipe, CommonModule],
    templateUrl: './references.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './references.component.scss'
})
export class ReferencesComponent {



  references = [
    {
      name: "felix",
      relation: "Team Partner"
    },
    {
      name: "ozan",
      relation: "Team Partner"
    },
    {
      name: "sven",
      relation: "Team Partner"
    }
  ]

}
