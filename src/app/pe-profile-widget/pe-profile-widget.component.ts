import { Component } from '@angular/core';

@Component({
    selector: 'pe-profilewidget',
    templateUrl: './pe-profile-widget.component.html',
    styleUrl: './pe-profile-widget.component.css'
})
export class PeProfileWidgetComponent {
    isLoggedIn = true;
    currentUser = {
        displayName: 'Blama Doe'
    }
    canEditProfile = true;
}
