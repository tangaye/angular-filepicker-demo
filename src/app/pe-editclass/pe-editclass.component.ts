import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-pe-editclass',
    templateUrl: './pe-editclass.component.html',
    styleUrl: './pe-editclass.component.css'
})
export class PeEditclassComponent {
    addVisible = true;
    classInfo = new FormGroup({
        name: new FormControl(''),
        description: new FormControl('ENTRxxx'),
        schoolyear: new FormControl('2017-2018'),
        number: new FormControl(''),
        fall: new FormControl<boolean>(false),
        winter: new FormControl<boolean>(false),
        spring: new FormControl<boolean>(true),
        summer: new FormControl<boolean>(false),
        meetingtimestart: new FormControl('12:00'),
        meetinglocation: new FormControl('TECH'),
        meetingtimeend: new FormControl('13:30'),
        monday: new FormControl<boolean>(false),
        tuesday: new FormControl<boolean>(false),
        wednesday: new FormControl<boolean>(false),
        thursday: new FormControl<boolean>(false),
        friday: new FormControl<boolean>(false),
    });
}
