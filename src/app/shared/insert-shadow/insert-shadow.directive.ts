import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    // @HostBinding('style...')
    // @Input() input: any;

    // constructor(private readonly elementRef: ElementRef<HTMLElement>) {
    //     console.log(elementRef);
    // }

    // @HostListener('touch', ['$event.touchX', '$event.touchY'])
    // @HostListener('mousemove', ['$event.clientX', '$event.clientY'])
    @HostListener('click', ['$event.clientX', '$event.clientY']) // <host-element (click)="onClick($event)">
    onClick(x: number, y: number) {
        // eslint-disable-next-line no-console
        console.log('Clicked', x, y);

        this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    }

    @HostBinding('style.boxShadow') // <host-element [style.boxShadow]="boxShadow">
    boxShadow = '';
}
