import {Component} from '@angular/core';
import {IProduct} from '../../shared/products/product.interface';
import {productsMock} from '../../shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    products: IProduct[] | null = null;

    constructor() {
        setTimeout(() => {
            this.products = productsMock;
        }, 3000);
    }

    trackById(_: number, item: IProduct): IProduct['_id'] {
        return item._id;
    }
}
