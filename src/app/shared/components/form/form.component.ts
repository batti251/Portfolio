import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { TranslatePipe } from "@ngx-translate/core";
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { FormEntryModel } from '../../models/form-entry-model';

@Component({
    selector: 'app-form',
    imports: [MatSelectModule, MatButtonModule, MatIconModule, MatInputModule, MatCheckboxModule, MatFormFieldModule, ReactiveFormsModule, TranslatePipe, FormsModule],
    templateUrl: './form.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './form.component.scss'
})
export class FormComponent {
  router = inject(Router);
  http = inject(HttpClient);
  formbuild = inject(FormBuilder)
  @Output() submitted = new EventEmitter();

contactForm = this.formbuild.nonNullable.group({
  name: ['', [Validators.required, Validators.pattern(".*\S.*")]],
  email:  ['', [Validators.required, Validators.email, Validators.pattern("[a-zA-Z0-9._%+\-]+@([a-zA-Z0-9\-]+\.)+[a-zA-Z]{2,}")]],
  message: ['', [Validators.required, Validators.minLength(5), Validators.pattern("([\s\S]*\S){5,}[\s\S]*")]],
  policy: [false, Validators.requiredTrue]
})

get name (){
  return this.contactForm.get('name')
}

get email (){
  return this.contactForm.get('email')
}

get message (){
  return this.contactForm.get('message')
}

get policy (){
  return this.contactForm.get('policy')
}


  post = {
    endPoint: 'https://sebastian-buenz.de/sendMail.php',
    body: (payload: any) => JSON.stringify(payload),
    options: {
      headers: {
        'Content-Type': 'text/plain',
        responseType: 'text',
      },
    },
  };

  onSubmit() {
    let form = new FormEntryModel(this.contactForm.value)
    if (this.contactForm.valid) {
      this.http.post(this.post.endPoint, this.post.body(form))
        .subscribe({
          next: (response) => {
            this.contactForm.reset();
          },
          error: (error) => {
            console.error(error);
          },
          complete: () => this.submitted.emit()
        });
    } 
  }
}
