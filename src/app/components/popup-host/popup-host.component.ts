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
    viewContainer: ViewContainerRef | null = null;

    static addTemplate: (template: TemplateRef<unknown> | null) => void;

    @HostListener('click') click() {
        this.viewContainer?.clear();
        this.display = 'none';
    }

    constructor() {
        PopupHostComponent.addTemplate = this.addTemplate.bind(this);
    }

    addTemplate(template: TemplateRef<unknown> | null) {
        if (template) {
            this.viewContainer?.clear();
            this.viewContainer?.createEmbeddedView(template);
            this.display = 'flex';
        }
    }
}
