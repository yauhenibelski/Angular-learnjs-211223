import {
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DoCheck,
} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';
// import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsListComponent implements AfterViewInit, AfterViewChecked, DoCheck {
    products: IProduct[] | null = null;

    constructor(private readonly changeDetectorRef: ChangeDetectorRef) {
        // this.changeDetectorRef.detach();

        // setTimeout(() => {
        //     this.changeDetectorRef.detectChanges();
        // });

        setTimeout(() => {
            this.products = productsMock;

            this.changeDetectorRef.markForCheck();

            // this.changeDetectorRef.reattach();
            // this.changeDetectorRef.detectChanges();
        }, 3000);

        // setTimeout(() => {
        //     this.products = productsMock.map(item => ({...item, feedbacksCount: 5}));
        //     // this.changeDetectorRef.detectChanges();
        // }, 5000);
    }

    ngDoCheck() {
        // eslint-disable-next-line no-console
        console.log('ngDoCheck - ProductsListComponent');
    }

    ngAfterViewInit() {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewInit - ProductsListComponent');
    }

    ngAfterViewChecked() {
        // eslint-disable-next-line no-console
        console.log('ngAfterViewChecked - ProductsListComponent');
    }

    trackById(_: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}

// const oldSetTimeout = setTimeout;

// window.setTimeout = function(cb, timer) {
//     console.log('Start');

//     oldSetTimeout(() => {
//         cb();
//         console.log('End');
//     }, timer);
// }
