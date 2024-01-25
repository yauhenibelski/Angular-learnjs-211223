import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
    selector: '[appInsertShadow]',
})
export class InsertShadowDirective {
    @HostListener('click')
    onClick() {
        this.boxShadow = !this.boxShadow ? 'inset 0 0 10px #000' : '';
    }

    @HostBinding('style.boxShadow')
    boxShadow = '';
}
