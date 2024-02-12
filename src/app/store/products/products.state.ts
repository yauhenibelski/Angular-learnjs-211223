import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {ProductsFilter} from '../../pages/products-list/filter/products-filter.interface';
import {Product} from '../../shared/products/product.interface';

export const PRODUCTS_FEATURE = 'products';

export interface ProductsState extends EntityState<Product> {
    // ids: Array<Product['_id']>;
    // entities: {[productId: Product['_id']]: Product};
    filter: ProductsFilter | null;
}

export const productsAdapter = createEntityAdapter<Product>({
    selectId: ({_id}: Product) => _id,
    // sortComparer: (a, b) => {}
});

export const productsInitialState: ProductsState = productsAdapter.getInitialState({
    filter: null,
});
