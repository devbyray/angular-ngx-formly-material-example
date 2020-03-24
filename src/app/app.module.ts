import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ReactiveFormsModule, FormControl, ValidationErrors } from '@angular/forms'
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core'
import { FormlyMaterialModule } from '@ngx-formly/material'
import { FormlyMatDatepickerModule } from '@ngx-formly/material/datepicker';
import { FormlyMatToggleModule } from '@ngx-formly/material/toggle';

import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatDialogModule } from '@angular/material/dialog'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatRadioModule } from '@angular/material/radio'
import { MatSelectModule } from '@angular/material/select'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatNativeDateModule } from '@angular/material/core'

export function validateRequired(err, field: FormlyFieldConfig) {
	return `This field is required`
}
export function validateMinLength(err, field: FormlyFieldConfig) {
	return `Should have atleast ${field.templateOptions.minLength} characters`
}
export function validateMaxLength(err, field: FormlyFieldConfig) {
	return `Should have less than ${field.templateOptions.maxLength} characters`
}
export function validateMin(err, field: FormlyFieldConfig) {
	return 'This value should be more than ' + field.templateOptions.min
}
export function validateMax(err, field: FormlyFieldConfig) {
	return `This value should be less than ${field.templateOptions.max}`
}

// Custom validation
export function IpValidator(control: FormControl): ValidationErrors {
	return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { 'ip': true };
}
export function IpValidatorMessage(err, field: FormlyFieldConfig) {
	return `"${field.formControl.value}" is not a valid IP Address`;
}

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,

		ReactiveFormsModule,
		MatCheckboxModule,
		MatButtonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatRadioModule,
		MatSelectModule,
		
		MatNativeDateModule,
		FormlyMatDatepickerModule,
		FormlyMatToggleModule,

		FormlyModule.forRoot({
			validationMessages: [
				{ name: 'required', message: validateRequired },
				{ name: 'minlength', message: validateMinLength },
				{ name: 'maxlength', message: validateMaxLength },
				{ name: 'min', message: validateMin },
				{ name: 'max', message: validateMax },
				// Custom validation message
				{ name: 'ip', message: IpValidatorMessage },
			],
			validators: [
				{ name: 'ip', validation: IpValidator },
			],
		}),
		FormlyMaterialModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
