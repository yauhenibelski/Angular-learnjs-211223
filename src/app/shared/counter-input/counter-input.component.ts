import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
    selector: 'app-counter-input',
    templateUrl: './counter-input.component.html',
    styleUrls: ['./counter-input.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            // eslint-disable-next-line no-use-before-define
            useExisting: CounterInputComponent,
        },
    ],
})
export class CounterInputComponent implements ControlValueAccessor {
    @Input() step = 1;

    counter = 0;
    isDisabled = false;

    private onChnage: (newCounter: number) => void = () => {
        throw new Error('что то пошло не так');
    };

    private onTouch: () => void = () => {
        throw new Error('что то пошло не так');
    };

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {}

    writeValue(value: number) {
        this.counter = value;

        this.changeDetectorRef.markForCheck();

        // eslint-disable-next-line no-console
        console.log('writeValue', this.counter);
    }

    registerOnChange(onChnage: (newCounter: number) => void): void {
        this.onChnage = onChnage;

        // eslint-disable-next-line no-console
        console.log('registerOnChange', this.onChnage);
    }

    registerOnTouched(onTouch: () => void): void {
        this.onTouch = onTouch;

        // eslint-disable-next-line no-console
        console.log('registerOnTouched', this.onTouch);
    }

    setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;

        this.changeDetectorRef.markForCheck();

        // eslint-disable-next-line no-console
        console.log('setDisabledState', this.isDisabled);
    }

    back() {
        this.counter -= this.step;

        this.onChnage(this.counter);
        this.onTouch();

        // eslint-disable-next-line no-console
        console.log('back', this.counter);
    }

    next() {
        this.counter += this.step;

        this.onChnage(this.counter);
        this.onTouch();

        // eslint-disable-next-line no-console
        console.log('next', this.counter);
    }
}
