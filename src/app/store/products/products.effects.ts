import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {switchMap} from 'rxjs';
import {Store} from '@ngrx/store';
import {addProducts, loadProducts} from './products.actions';
import {ProductsApiService} from '../../shared/products/products-api.service';
import {State} from '../reducer';

@Injectable({providedIn: 'root'})
export class ProductsEffects {
    constructor(
        private readonly action$: Actions,
        private readonly productsApiService: ProductsApiService,
        private readonly store$: Store<State>,
    ) {}

    // readonly loadProducts$ = createEffect(
    //     () =>
    //         this.action$.pipe(
    //             // filter(action => action.type === loadProducts.type),
    //             ofType(loadProducts),
    //             switchMap(({subCategoryId}) =>
    //                 this.productsApiService.getProducts$(subCategoryId).pipe(
    //                     tap(products => {
    //                         this.store$.dispatch(addProducts(products));
    //                     }),
    //                 ),
    //             ),
    //         ),
    //     {dispatch: false}, // .subscribe();
    // );
    readonly loadProducts$ = createEffect(
        () =>
            this.action$.pipe(
                // filter(action => action.type === loadProducts.type),
                ofType(loadProducts),
                switchMap(({subCategoryId}) =>
                    this.productsApiService
                        .getProducts$(subCategoryId)
                        // .pipe(map(products => addProducts(products))),
                        .pipe(switchMap(products => [addProducts(products)])),
                ),
            ),
        // {dispatch: true}, // .subscribe(action => {this.store$.dispatch(action)});
    );
}
