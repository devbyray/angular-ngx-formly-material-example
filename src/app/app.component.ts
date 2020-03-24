import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core'
import { HttpClient } from '@angular/common/http'

@Component({
	selector: 'app-root',
	// templateUrl: './app.component.html',
	template: `
		<div class="container">
      <h1>{{ title }}</h1>
      <p>This is an example form based on the Medium tutorial.</p>

			<form [formGroup]="form" (ngSubmit)="onSubmit()">
        <formly-form [form]="form" [fields]="fields" [model]="model" [options]="options"></formly-form>
        <button type="button" mat-raised-button color="warn" (click)="options.resetModel()">Reset</button>
				<button type="submit" mat-raised-button color="primary">Submit</button>
      </form>
      <pre>
        {{model | json}}
      </pre>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Angular NGX-Formly with Material'
  form = new FormGroup({})
  options: FormlyFormOptions = {};

  constructor(private http: HttpClient) { }
  
	model = { 
    email: "",
    terms_1: false,
    terms: false,
    date_of_birth: '',
    amount: 100,
    name: "",
    description: "",
    gender: 3 
  }
	fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      templateOptions: {
        label: 'Name',
        placeholder: 'Enter name',
        required: true,
      },
    },
    {
      key: 'email',
      type: 'input',
      hideExpression: '!model.name',
      templateOptions: {
        type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        minLength: 3,
      },
    },
    {
      key: 'amount',
      type: 'input',
      templateOptions: {
        type: 'number',
        label: 'Amount',
        placeholder: 'Enter amount',
        min: 1,
        max: 15
      }
    },
    {
      key: 'ip',
      type: 'input',
      templateOptions: {
        label: 'IP Address (using custom validation declared in ngModule)',
        required: true,
      },
      validators: {
        validation: ['ip'],
      },
     },
    {
      key: 'date_of_birth',
      type: 'datepicker',
      templateOptions: {
        label: 'Datepicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
      },
    },
    {
      key: 'terms',
      type: 'checkbox',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'terms_1',
      type: 'toggle',
      templateOptions: {
        label: 'Accept terms',
        description: 'Please accept our terms',
        required: true,
      },
    },
    {
      key: 'description',
      type: 'textarea',
      templateOptions: {
        label: 'Description',
        placeholder: 'Enter description',
      }
    },
    {
      key: 'gender',
      type: 'radio',
      templateOptions: {
        label: 'Gender',
        placeholder: 'Placeholder',
        description: 'Fill in your gender',
        options: [
          { value: 1, label: 'Male' },
          { value: 2, label: 'Female' },
          { value: 3, label: 'I don\'t want to share that' },
        ],
      },
    },
    // Repeatable section
    {
      key: 'investments',
      type: 'repeat',
      templateOptions: {
        addText: 'Add another investment',
      },
      fieldArray: {
        fieldGroup: [
          {
            type: 'input',
            key: 'investmentName',
            templateOptions: {
              label: 'Name of Investment:',
              required: true,
            },
          },
          {
            type: 'datepicker',
            key: 'investmentDate',
            templateOptions: {
              label: 'Date of Investment:',
            },
          },
          {
            key: 'amount',
            type: 'input',
            templateOptions: {
              type: 'number',
              label: 'Amount',
              placeholder: 'Enter amount',
              min: 1,
              max: 15
            }
          },
        ],
      },
    },
	]

	onSubmit() {
		if (this.form.valid) {
      this.http.post('url', this.model, null).subscribe((response) => {
        console.log('response:', response)
      }, (error) => {
        console.error('error:', error)
      })
    }
  }
  
}
