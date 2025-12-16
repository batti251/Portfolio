import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { FormComponent } from '../form/form.component';
import { SubmitMessageComponent } from '../submit-message/submit-message.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FormComponent, SubmitMessageComponent, MatFormFieldModule, MatSelectModule, MatIconModule, MatInputModule, MatCheckboxModule, MatCardModule, TranslatePipe],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {

  router = inject(Router);

  showMessage = false;

  /**
   * This Function sets showMessage-State to show message-box
   * The message-box will be removed after 2 seconds
   */
  onFormSubmit() {
    this.showMessage = true;
    setTimeout(() => {
      this.showMessage = false;
    }, 2000);
  }
}
