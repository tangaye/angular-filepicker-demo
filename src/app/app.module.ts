import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule, MatCardContent } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FileInputComponent } from './file-input/file-input.component';
import { PeToolbarComponent } from './pe-toolbar/pe-toolbar.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatMenuModule } from '@angular/material/menu';
import { PeProfileWidgetComponent } from './pe-profile-widget/pe-profile-widget.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PeHomeComponent } from './pe-home/pe-home.component';
import { PeEditclassComponent } from './pe-editclass/pe-editclass.component';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
    declarations: [AppComponent, FileInputComponent, PeToolbarComponent, PeProfileWidgetComponent, PeHomeComponent, PeEditclassComponent, UsersComponent],
    imports: [
        MatPaginator,
        MatPaginatorModule,
        BrowserModule,
        AppRoutingModule,
        MatSelectModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatCardContent,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        FormsModule,
        MatSlideToggle,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatTooltipModule,
        CommonModule,
        ReactiveFormsModule,
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule { }
