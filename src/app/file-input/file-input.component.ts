import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-file-input',
    templateUrl: './file-input.component.html',
    styleUrl: './file-input.component.css'
})
export class FileInputComponent {
    file: File | null = null;

    @ViewChild('fileInput') fileInput: any;

    openFilePicker() {
        this.fileInput.nativeElement.click();
    }

    fileSelected() {
        if (this.fileInput.nativeElement.files.length) {
            this.file = this.fileInput.nativeElement.files[0];
            return;
        }

        this.file = null;
    }
}
