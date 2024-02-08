import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    Output,
    SimpleChanges,
} from '@angular/core';
// import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
// import {Observable, map, startWith, tap, timer} from 'rxjs';
import {FormBuilder, FormControl} from '@angular/forms';
import {IProductsFilter} from '../products-filter.interface';

// const isStringValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
//     console.log('Calc string validator');

//     return Number(control.value) ? {isString: 'Has number value'} : null;
// };

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterComponent implements OnChanges {
    @Input() brands: string[] | null = null;

    @Output() changeFilter = new EventEmitter<IProductsFilter>();

    // readonly nameControl = new FormControl('', {
    //     validators: [Validators.required, Validators.minLength(3)],
    //     asyncValidators: [this.isStringAsyncValidator.bind(this)],
    // });

    // readonly errors$ = this.nameControl.statusChanges.pipe(
    //     tap(console.log),
    //     // map(status => (status === 'INVALID' ? this.nameControl.errors : null)),
    //     map(() => this.nameControl.errors),
    //     startWith(this.nameControl.errors),
    // );

    // private isStringAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
    //     console.log('Calc async string validator');

    //     return timer(3000).pipe(
    //         map(() => (Number(control.value) ? {isString: 'Has number value'} : null)),
    //         // tap(() => {this.cdr.markForCheck()})
    //     );
    // }

    // readonly filterForm = new FormGroup({
    //     name: new FormControl(''),
    //     brands: new FormArray([]),
    //     priceRange: new FormGroup({
    //         min: new FormControl(0),
    //         max: new FormControl(999999),
    //     }),
    // });
    readonly filterForm = this.formBuilder.group({
        // name: this.formBuilder.control('', {validators: [Validators.required]}),
        // name: ['', {validators: [Validators.required]}],
        name: '',
        brands: this.formBuilder.array<FormControl<boolean | null>>([]),
        priceRange: this.formBuilder.group({
            min: 0,
            max: 999999,
        }),
    });

    constructor(private readonly formBuilder: FormBuilder) {
        // this.filterForm.get(['priceRange', 'min']);
        // this.filterForm.get(['name']);
        // eslint-disable-next-line no-console
        this.filterForm.valueChanges.subscribe(console.log);
    }

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    private updateBrandsControl() {
        // const brandsControls: Array<FormControl<boolean>> = this.brands
        //     ? this.brands.map(() => this.formBuilder.control(false))
        //     : [];
        const brandsControls: boolean[] = this.brands ? this.brands.map(() => false) : [];

        const brandsFormArray = this.formBuilder.array(brandsControls);

        this.filterForm.setControl('brands', brandsFormArray);
    }
}
