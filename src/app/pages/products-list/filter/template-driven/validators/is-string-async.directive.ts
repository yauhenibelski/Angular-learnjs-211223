import {ChangeDetectorRef, Directive} from '@angular/core';
import {
    AbstractControl,
    AsyncValidator,
    NG_ASYNC_VALIDATORS,
    ValidationErrors,
} from '@angular/forms';
import {Observable, map, tap, timer} from 'rxjs';

@Directive({
    selector: '[appIsStringAsync]',
    providers: [
        {
            provide: NG_ASYNC_VALIDATORS,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: IsStringAsyncDirective,
        },
    ],
})
export class IsStringAsyncDirective implements AsyncValidator {
    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    validate(control: AbstractControl): Observable<ValidationErrors | null> {
        // eslint-disable-next-line no-console
        console.log('Calc async string validator');

        return timer(3000).pipe(
            map(() => (Number(control.value) ? {isString: 'Has number value'} : null)),
            tap(() => {
                this.changeDetectorRef.markForCheck();
            }),
        );
    }
}
