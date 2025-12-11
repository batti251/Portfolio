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

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, MatSelectModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, TranslatePipe, FormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {

    router = inject(Router);

    onSubmit(){
      console.log("hallo")
    }
}
