import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-privacy',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './privacy.component.html',
  styleUrl: './privacy.component.scss'
})
export class PrivacyComponent {

   arr = [
    {data1: 'inventory data'},
      {data2: 'contact data'},
      {data3: 'content data'},
      {data4: 'usage data'},
      {data5: 'meta'},
      {data6: 'log data'}
    
  ]

  affectedPersons = [
    {data1: 'communication partner'},
    {data2: 'user'}
  ]


  purpose = [
     {data1: 'communication'},
      {data2: 'security measures'},
      {data3: 'organizational and administrative procedures'},
      {data4: 'feedback'},
      {data5: 'Provision of our online services and user-friendliness'},
      {data6: 'IT Infrastructure'},
      {data7: 'public relations'}
  ]

  legalRelevance = [0,1,2,3]
}
