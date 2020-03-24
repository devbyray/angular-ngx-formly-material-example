import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';
@Component({
  selector: 'formly-repeat-section',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index;" class="row">
      <formly-field class="col" [field]="field"></formly-field>
      <div class="col-sm-2 d-flex align-items-center">
        <button class="btn btn-danger" type="button" (click)="remove(i)">Remove</button>
      </div>
    </div>
    <div style="margin:30px 0;">
      <button mat-raised-button color="secondary" type="button" (click)="add()">{{ to.addText }}</button>
    </div>
  `,
  styles: [
    `
    .row {
        border-top: 1px solid #333;
        padding: 1rem;
        margin: 1rem 0;
        background: #ccc;
    }
    `
  ]
})
export class RepeatTypeComponent extends FieldArrayType {}