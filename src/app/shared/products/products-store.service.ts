import {BehaviorSubject, Subscription, filter} from 'rxjs';
import {Injectable} from '@angular/core';
import {Product} from './product.interface';
import {ProductsApiService} from './products-api.service';

@Injectable({
    providedIn: 'root',
})
export class ProductsStoreService {
    private readonly productsStore$ = new BehaviorSubject<Product[] | null>(null);
    private readonly currentProductStore$ = new BehaviorSubject<Product | null>(null);

    private activeLoadProductsSubscription: Subscription | null = null;
    private activeLoadProductSubscription: Subscription | null = null;

    readonly products$ = this.productsStore$.asObservable();
    readonly currentProduct$ = this.currentProductStore$.asObservable();

    constructor(private readonly productsApiService: ProductsApiService) {}

    loadProducts() {
        if (this.activeLoadProductsSubscription) {
            this.activeLoadProductsSubscription.unsubscribe();
        }

        this.activeLoadProductsSubscription = this.productsApiService
            .getProducts$()
            .subscribe(products => {
                this.productsStore$.next(products);

                this.activeLoadProductsSubscription = null;
            });
    }

    loadProduct(productId: string) {
        if (this.activeLoadProductSubscription) {
            this.activeLoadProductSubscription.unsubscribe();
        }

        const productPreview = this.productsStore$.value?.find(({_id}) => _id === productId);

        this.currentProductStore$.next(productPreview || null);

        this.activeLoadProductSubscription = this.productsApiService
            .getProduct$(productId)
            .pipe(filter(Boolean))
            .subscribe(product => {
                this.currentProductStore$.next(product);
            });
    }
}
