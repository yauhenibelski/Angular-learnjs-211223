import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector: '[appIsString]',
    providers: [
        {
            provide: NG_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringDirective,
        },
        // {
        //     provide: NG_VALIDATORS,
        //     multi: true,
        //     useValue: <Validator>{
        //         validate(_control: AbstractControl): ValidationErrors | null {
        //             return {testError: 'Is test error'};
        //         },
        //     },
        // },
    ],
})
export class IsStringDirective implements Validator {
    validate(control: AbstractControl): ValidationErrors | null {
        // eslint-disable-next-line no-console
        console.log('Calc string validator');

        return Number(control.value) ? {isString: 'Has number value'} : null;
    }
}
