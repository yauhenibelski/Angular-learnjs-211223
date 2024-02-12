import {createFeatureSelector} from '@ngrx/store';
import {PRODUCTS_FEATURE, ProductsState, productsAdapter} from './products.state';

// export const productsFeatureSelector = (state: State) => state[PRODUCTS_FEATURE];
export const productsFeatureSelector = createFeatureSelector<ProductsState>(PRODUCTS_FEATURE);

// export const selectProductsEntities = (state: State) => productsFeatureSelector(state).entities;
// export const selectProductsEntities = createSelector(
//     productsFeatureSelector,
//     (productsState: ProductsState) => productsState.entities, // extractFn
// );
// export const selectProductsEntities = (state: State) => extractFn(productsFeatureSelector(state));

// const {selectEntities, selectAll} = productsAdapter.getSelectors();

// export const selectProductsEntities = createSelector(
//     productsFeatureSelector,
//     selectEntities, // extractFn
// );

// export const selectProducts = createSelector(
//     productsFeatureSelector,
//     selectAll, // extractFn
// );

export const {selectEntities: selectProductsEntities, selectAll: selectProducts} =
    productsAdapter.getSelectors(productsFeatureSelector);
