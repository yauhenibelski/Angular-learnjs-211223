import {map, Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {productsMock} from './products.mock';
import {Product} from './product.interface';
// import {BASE_URL} from '../base-url/base-url.token';

@Injectable()
export class ProductsApiService {
    // constructor(@Inject(BASE_URL) private readonly baseUrl: string) {}

    getProducts$(): Observable<Product[]> {
        return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }
}
