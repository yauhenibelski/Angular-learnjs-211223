import {Directive, EventEmitter, HostListener, Output} from '@angular/core';
import ScrollDirection from './scroll-direction.enum';

@Directive({
    selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective {
    private currentDirection: ScrollDirection | null = ScrollDirection.up;

    @Output() loadData = new EventEmitter<ScrollDirection>();
    @HostListener('scroll', ['$event.target']) scroll({
        scrollHeight,
        scrollTop,
        offsetHeight,
    }: HTMLElement) {
        const MIN_PADDING = 100;
        const scrollDown = scrollHeight - scrollTop - offsetHeight;

        if (scrollDown <= MIN_PADDING) {
            if (this.currentDirection !== ScrollDirection.down) {
                this.currentDirection = ScrollDirection.down;
                this.loadData.emit(this.currentDirection);
            }

            return;
        }

        if (scrollTop <= MIN_PADDING) {
            if (this.currentDirection !== ScrollDirection.up) {
                this.currentDirection = ScrollDirection.up;
                this.loadData.emit(this.currentDirection);
            }

            return;
        }

        this.currentDirection = null;
    }
}
