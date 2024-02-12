import {FormControl} from '@angular/forms';
import {IsStringDirective} from './is-string.directive';

describe('IsStringDirective', () => {
    let directive: IsStringDirective;

    // it('should create an instance', () => {
    //     const directive = new IsStringDirective();

    //     expect(directive).toBeTruthy();
    // });

    // describe('', () => {
    //     beforeEach(() => {

    //     });

    // })

    beforeEach(() => {
        directive = new IsStringDirective();
    });

    it('форма с числом', () => {
        const errorControl = new FormControl('2000');
        const error = directive.validate(errorControl);

        expect(error).toEqual({isString: 'Has number value'});
        // expect(Boolean(error)).toBeTrue();
        // expect(error).toBeTruthy();
    });

    it('Форма со строкой', () => {
        const successControl = new FormControl('Hello');
        const error = directive.validate(successControl);

        expect(error).toEqual(null);
        // expect(Boolean(error)).toBeTrue();
        // expect(error).toBeTruthy();
    });
});
