import { Component } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [TranslatePipe, CommonModule],
  templateUrl: './references.component.html',
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
