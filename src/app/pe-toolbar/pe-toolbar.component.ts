import { Component } from '@angular/core';

@Component({
    selector: 'pe-toolbar',
    templateUrl: './pe-toolbar.component.html',
    styleUrl: './pe-toolbar.component.css'
})

export class PeToolbarComponent {
    isLoggedIn = true;
    isAdmin = true;
    isStudent = false;
    isFaculty = true;
    authError = null;
    online = null;
}
