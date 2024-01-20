import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import ScrollDirection from './scroll-direction.enum';

@Directive({
    selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
    @Output() loadData = new EventEmitter<ScrollDirection>();
    @HostListener('scroll', ['$event.target']) scroll(elem: HTMLElement) {
        const {scrollHeight, scrollTop, offsetHeight} = elem;
        const MIN_PADDING = elem.firstElementChild!.clientHeight; // card height

        if (scrollTop + offsetHeight + MIN_PADDING >= scrollHeight) {
            this.loadData.emit(ScrollDirection.down);
        }

        if (scrollTop <= MIN_PADDING) {
            this.loadData.emit(ScrollDirection.up);
        }
    }
}
