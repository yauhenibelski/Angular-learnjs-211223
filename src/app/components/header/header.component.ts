import {Component} from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    readonly title = 'Angular-learnjs-211223';
    readonly imgSrc = '../../../favicon.ico';

    menuClick(event: MouseEvent) {
        // eslint-disable-next-line no-console
        console.log('Clicked', event);
    }
}
