import {map, Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './product.interface';
import {ProductDto} from './product.dto';

interface ProductsDto {
    data: {
        items: Product[];
    };
}

@Injectable()
export class ProductsApiService {
    constructor(private readonly httpClient: HttpClient) {}

    getProducts$(): Observable<Product[]> {
        return this.httpClient.get<ProductsDto>(`/products`).pipe(map(({data}) => data.items));
    }

    getProduct$(id: string): Observable<Product | undefined> {
        return this.httpClient.get<ProductDto>(`/products/${id}`).pipe(map(({data}) => data));
    }
}
