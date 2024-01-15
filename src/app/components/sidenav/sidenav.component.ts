import {Component, ViewChild} from '@angular/core';
import {MatDrawer} from '@angular/material/sidenav';

@Component({
    selector: 'app-sidenav',
    templateUrl: './sidenav.component.html',
    styleUrls: ['./sidenav.component.css'],
})
export class SidenavComponent {
    @ViewChild('drawer') private readonly drawerComponent: MatDrawer | null = null;

    toggleSidenavOpened() {
        this.drawerComponent?.toggle();
    }
}
