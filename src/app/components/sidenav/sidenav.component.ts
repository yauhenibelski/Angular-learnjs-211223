import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    // @Input() navigationTemplate: TemplateRef<unknown> | null = null;
    // @Input() set navigationTemplate(template: TemplateRef<unknown>) {
    //     this.viewportViewContainerRef?.clear();
    //     this.viewportViewContainerRef?.createEmbeddedView(template);
    // }

    // @ViewChild('drawer') private readonly drawerComponent: MatDrawer | null = null;
    @ViewChild(MatDrawer, {static: true}) private readonly drawerComponent: MatDrawer | null = null;

    // @ViewChild(MatButton, {read: ElementRef}) private readonly firstButton: ElementRef | null = null;
    @ViewChild('firstButton', {read: ElementRef, static: false})
    private readonly firstButton: ElementRef | null = null;

    @ViewChild('secondButton', {read: ElementRef, static: true})
    private readonly secondButton: ElementRef | null = null;

    // @ViewChild('viewport', {read: ViewContainerRef, static: true})
    // private readonly viewportViewContainerRef: ViewContainerRef | null = null;

    // @ContentChild('navigationTemplate', {static: true})
    // private readonly navigationTemplate: TemplateRef<unknown> | null = null;

    // @ContentChild('first', {static: true, descendants: false})
    // private set secondDivFromContent(elementRef: ElementRef) {
    //     console.log(elementRef);
    // }

    // ngOnInit(): void {
    //     // console.log(this.firstButton, this.secondButton);
    //     if (this.navigationTemplate) {
    //         this.viewportViewContainerRef?.createEmbeddedView(this.navigationTemplate);
    //     }
    // }

    toggleSidenavOpened() {
        // eslint-disable-next-line no-console
        console.log(this.firstButton, this.secondButton);
        this.drawerComponent?.toggle();
    }
}
