import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MatCardModule } from '@angular/material/card';
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
import { SectionEvalOverviewComponent } from './section-eval-overview/section-eval-overview.component';
import { MatMenuModule } from '@angular/material/menu';
import { PeProfileWidgetComponent } from './pe-profile-widget/pe-profile-widget.component';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
    declarations: [AppComponent, SectionEvalOverviewComponent, FileInputComponent, PeToolbarComponent, PeProfileWidgetComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatTableModule,
        FormsModule,
        MatSlideToggle,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatTooltipModule
    ],
    providers: [provideAnimationsAsync()],
    bootstrap: [AppComponent],
})
export class AppModule { }
