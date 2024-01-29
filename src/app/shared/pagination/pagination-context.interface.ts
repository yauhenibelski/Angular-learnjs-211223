export interface PaginationContext<T> {
    $implicit: T[];
    index: number;
    appPaginationOf: T[];
    pageIndexes: number[];
    next: () => void;
    back: () => void;
    selectIndex: (index: number) => void;
}
