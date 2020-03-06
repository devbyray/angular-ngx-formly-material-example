import { Component } from '@angular/core'
import { FormGroup } from '@angular/forms'
import { FormlyFieldConfig } from '@ngx-formly/core'

@Component({
	selector: 'app-root',
	// templateUrl: './app.component.html',
	template: `
		<div>
			<h1>{{ title }}</h1>

			<form [formGroup]="form" (ngSubmit)="onSubmit()">
				<formly-form [form]="form" [fields]="fields" [model]="model"></formly-form>
				<button type="submit" class="btn btn-default">Submit</button>
			</form>
		</div>
	`,
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'angular-ngx-formly-material'
	form = new FormGroup({})
	model = { email: 'email@gmail.com' }
	fields: FormlyFieldConfig[] = [
		{
			key: 'email',
			type: 'input',
			templateOptions: {
				label: 'Email address',
				placeholder: 'Enter email',
				required: true,
			},
		},
	]

	onSubmit() {
		console.log(this.model)
	}
}
