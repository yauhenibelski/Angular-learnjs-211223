import {createAction} from '@ngrx/store';
import {Product} from '../../shared/products/product.interface';

export enum ProductsActionType {
    LoadProducts = '[Products] Load products',
    AddProducts = '[Products] Add products',
}

export const loadProducts = createAction(
    ProductsActionType.LoadProducts,
    (subCategoryId?: string | null) => ({subCategoryId}),
);

export const addProducts = createAction(ProductsActionType.AddProducts, (products: Product[]) => ({
    products,
}));

// addProducts([...]) => {products: [...], type: ProductsActionType.AddProducts} as Action
