import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map, switchMap, tap} from 'rxjs';
import {Product} from '../../shared/products/product.interface';
import {ProductsStoreService} from '../../shared/products/products-store.service';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent {
    readonly products$ = this.activatedRoute.paramMap.pipe(
        map(paramMap => paramMap.get('subCategoryId')),
        tap(subCategoryId => {
            this.productsStoreService.loadProducts(subCategoryId);
        }),
        switchMap(() => this.productsStoreService.products$),
    );
    // readonly products$ = this.activatedRoute.data.pipe(
    //     // eslint-disable-next-line dot-notation
    //     map(data => data?.['products'] as Product[]),
    // );

    // readonly counterControl = new FormControl(0);

    counter = 0;

    constructor(
        private readonly productsStoreService: ProductsStoreService,
        private readonly activatedRoute: ActivatedRoute,
        private readonly changeDetectorRef: ChangeDetectorRef,
    ) {
        setTimeout(() => {
            // this.counterControl.setValue(100);
            // this.counterControl.disable();
            //     this.counterControl.reset(0);
            this.counter = 5;
            this.changeDetectorRef.markForCheck();
        }, 2000);
        // setTimeout(() => {
        //     // this.counterControl.setValue(100);
        //     this.counterControl.enable();
        // }, 3000);
        // this.counterControl.valueChanges
        //     .pipe(startWith(this.counterControl.value))
        //     .subscribe(newValue => {
        //         console.log('valueChanges', newValue);
        //     });

        // this.counterControl.statusChanges.subscribe(console.log);
    }

    trackById(_: number, item: Product): Product['_id'] {
        return item._id;
    }
}
