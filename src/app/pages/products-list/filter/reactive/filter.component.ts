import {
    ChangeDetectionStrategy,
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges,
} from '@angular/core';
// import {AbstractControl, AsyncValidatorFn, FormControl, ValidationErrors, ValidatorFn, Validators} from '@angular/forms';
// import {Observable, map, startWith, tap, timer} from 'rxjs';
import {FormBuilder, FormControl} from '@angular/forms';
import {Observable, Subject, debounceTime, map, takeUntil} from 'rxjs';
import {ProductsFilter} from '../products-filter.interface';
import {ProductsFilterForm} from '../products-filter-form.interface';

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
export class FilterComponent implements OnChanges, OnInit, OnDestroy {
    @Input() brands: string[] | null = null;
    @Input() initialFilter: ProductsFilter | null = null;

    // Output by EventEmitter
    // ------------------------
    @Output() changeFilter = new EventEmitter<ProductsFilter>();
    // ------------------------
    //
    // Output by stream
    // ------------------------
    // @Output() readonly changeFilter: Observable<ProductsFilter>;
    // ------------------------

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

    private readonly destroy$ = new Subject<void>();

    constructor(private readonly formBuilder: FormBuilder) {
        // this.filterForm.get(['priceRange', 'min']);
        // this.filterForm.get(['name']);
        // eslint-disable-next-line no-console
        // this.filterForm.valueChanges.subscribe(console.log);
        //
        // Output by stream
        // ------------------------
        // Необходимо делать это в конструкторе, т.к. при создании потока нужна уже созданная форма (filterForm)
        // this.changeFilter = this.getFilterStream$();
        // ------------------------
    }

    ngOnChanges({brands}: SimpleChanges): void {
        if (brands) {
            this.updateBrandsControl();
        }
    }

    ngOnInit() {
        // Output by EventEmitter
        // ------------------------
        this.listenFormChange();
        // ------------------------
        this.updateInitialFormValue();
    }

    // Output by EventEmitter
    // ------------------------
    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
    // ------------------------

    private updateBrandsControl() {
        // const brandsControls: Array<FormControl<boolean>> = this.brands
        //     ? this.brands.map(() => this.formBuilder.control(false))
        //     : [];

        const savedBrands = this.initialFilter?.brands || [];

        const brandsControls: boolean[] = this.brands
            ? this.brands.map(brand => savedBrands.includes(brand))
            : [];

        const brandsFormArray = this.formBuilder.array(brandsControls);

        this.filterForm.setControl('brands', brandsFormArray);
    }

    // Output by EventEmitter
    // ------------------------
    private listenFormChange() {
        const changeFormValue$ = this.filterForm.valueChanges as Observable<ProductsFilterForm>;

        changeFormValue$
            .pipe(
                debounceTime(300),
                map(formValue => ({
                    ...formValue,
                    brands: this.getSelectedBrands(formValue.brands as boolean[]),
                })),
                takeUntil(this.destroy$),
            )
            .subscribe(filter => {
                this.changeFilter.emit(filter as ProductsFilter);
            });
    }
    // ------------------------

    private getSelectedBrands(brandSelection: boolean[]): ProductsFilter['brands'] {
        return this.brands ? this.brands.filter((_brand, index) => brandSelection[index]) : [];
    }

    private updateInitialFormValue() {
        const {name, priceRange} = this.initialFilter || {};

        this.filterForm.patchValue({name, priceRange});
    }

    // Output by stream
    // ------------------------
    // private getFilterStream$(): Observable<ProductsFilter> {
    //     return this.filterForm.valueChanges.pipe(
    //         map(
    //             ({brands, name, ...otherValues}) =>
    //                 ({
    //                     ...otherValues,
    //                     name,
    //                     brands: this.getSelectedBrands(brands as boolean[]),
    //                 } as ProductsFilter),
    //         ),
    //     );
    // }
    // ------------------------
}
