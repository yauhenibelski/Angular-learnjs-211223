import {inject} from '@angular/core';
import {ResolveFn} from '@angular/router';
import {ProductsApiService} from '../products/products-api.service';
import {Product} from '../products/product.interface';

export const loadProductsResolver: ResolveFn<Product[]> = (_route, _state) => {
    return inject(ProductsApiService).getProducts$();
};
