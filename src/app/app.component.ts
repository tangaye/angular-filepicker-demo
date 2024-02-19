import { Component, ViewChild } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrl: './app.component.css',
})
export class AppComponent {
	title = 'pitch-demo';

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
