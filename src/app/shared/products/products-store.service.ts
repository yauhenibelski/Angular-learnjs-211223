import {BehaviorSubject, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {Product} from './product.interface';
import {ProductsApiService} from './products-api.service';

@Injectable()
export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<Product[] | null>(null);

    constructor(private readonly productsApiService: ProductsApiService) {
        // eslint-disable-next-line no-console
        console.log('Create ProductsStoreService');
    }

    get products$(): Observable<Product[] | null> {
        return this.productsStore$.asObservable();
    }

    loadProducts() {
        this.productsApiService.getProducts$().subscribe(products => {
            this.productsStore$.next(products);
        });
        // setTimeout(() => {
        //     this.productsStore$.next(productsMock);
        // }, 2000);
    }
}
