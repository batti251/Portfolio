import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatButtonModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, TranslatePipe, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  router = inject(Router);

  newMessage = {
    name: "",
    email: "",
    message: "",
  }


  onSubmit() {
    console.log("gesendet");
    
    console.log(this.newMessage)
  }
}
