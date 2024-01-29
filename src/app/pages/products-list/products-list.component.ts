import {Component} from '@angular/core';
import ScrollDirection from 'src/app/shared/directives/infiniteScroll/infinite-scroll/scroll-direction.enum';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    productsStore: IProduct[] | null = null;

    get products(): IProduct[] | null {
        // eslint-disable-next-line no-console
        // console.log('Products calculated');

        return this.productsStore;
    }

    constructor() {
        setTimeout(() => {
            this.productsStore = productsMock;
        }, 500);
    }

    onLoad(direction: ScrollDirection) {
        if (direction === ScrollDirection.down) {
            // this.products?.push(...this.products); // например
        }

        if (direction === ScrollDirection.up) {
            // to do smt
        }

        // eslint-disable-next-line no-console
        console.log(direction);
    }

    onProductBuy(id: IProduct['_id']) {
        // eslint-disable-next-line no-console
        console.log(id);
    }
}
