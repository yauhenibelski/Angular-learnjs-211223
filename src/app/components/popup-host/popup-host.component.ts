import {
    Component,
    HostBinding,
    HostListener,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
} from '@angular/core';

@Component({
    selector: 'app-popup-host',
    templateUrl: './popup-host.component.html',
    styleUrls: ['./popup-host.component.css'],
})
export class PopupHostComponent {
    @HostBinding('style.display') display: 'flex' | 'none' = 'none';
    @ViewChild('content', {read: ViewContainerRef})
    vc: ViewContainerRef | null = null;

    @HostListener('click') click() {
        this.vc?.clear();
        this.display = 'none';
    }

    addTemplate(template: TemplateRef<unknown> | null) {
        if (template) {
            this.vc?.clear();
            this.vc?.createEmbeddedView(template);
            this.display = 'flex';
        }
    }
}
