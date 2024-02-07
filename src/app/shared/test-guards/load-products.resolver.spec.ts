import {TestBed} from '@angular/core/testing';
import {ResolveFn} from '@angular/router';

import {loadProductsResolver} from './load-products.resolver';

describe('loadProductsResolver', () => {
    const executeResolver: ResolveFn<boolean> = (...resolverParameters) =>
        TestBed.runInInjectionContext(() => loadProductsResolver(...resolverParameters));

    beforeEach(() => {
        TestBed.configureTestingModule({});
    });

    it('should be created', () => {
        expect(executeResolver).toBeTruthy();
    });
});
