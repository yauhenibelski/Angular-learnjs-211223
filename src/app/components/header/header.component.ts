import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ApplicationConfig} from '../../shared/application-config/application-config.interface';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
    // readonly title = 'Angular-learnjs-211223';
    // readonly imgSrc = '../../../favicon.ico';

    // @Input('applicationConfig') applicationConfig: ApplicationConfig | null = null;
    @Input() applicationConfig: ApplicationConfig | null = null;
    // @Input('config') applicationConfig: ApplicationConfig | null = null;

    // @Output() readonly menuClick = new Subject<void>();
    // @Output() readonly menuClick = interval(100);
    // @Output('menu') readonly menuClick = new EventEmitter<void>();
    @Output() readonly menuClick = new EventEmitter<void>(true);
    // @Output() readonly menuClick = new EventEmitter<MouseEvent>();

    onMenuClick(event: MouseEvent) {
        // this.menuClick.next();
        // this.menuClick.emit(event); // emit === super.next
        this.menuClick.emit();

        // eslint-disable-next-line no-console
        console.log('Clicked', event);
    }
}
