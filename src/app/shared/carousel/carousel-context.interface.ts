export interface CarouselContext<T> {
    $implicit: T;
    appCarouselOf: T[];
    next: () => void;
    back: () => void;
}
