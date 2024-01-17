import {Component} from '@angular/core';
import {productsMock} from 'src/app/shared/products/products.mock';

@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.component.html',
    styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent {
    readonly products = productsMock;

    addToCart(productID: string) {
        // eslint-disable-next-line no-console
        console.log(`The product was added in cart \n Product id: ${productID}`);
    }

    onCardClick() {
        // eslint-disable-next-line no-console
        console.log('Cart click');
    }
}
