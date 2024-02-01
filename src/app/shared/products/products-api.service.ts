import {map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.interface';

interface ProductsDto {
    data: {
        items: Product[];
    };
}

@Injectable()
export class ProductsApiService {
    // BASE_URL -> https://course-angular.javascript.ru/api
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<Product[]> {
        return this.httpClient
            .get<ProductsDto>(`/products/suggestion`)
            .pipe(map(({data}) => data.items));
        // return of({data: {items: productsMock}}).pipe(map(({data}) => data.items));
    }
}
