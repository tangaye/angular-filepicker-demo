import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SectionEvalOverviewComponent } from './section-eval-overview/section-eval-overview.component';

const routes: Routes = [
    {
        path: "eval",
        component: SectionEvalOverviewComponent,
        title: "Evaluate session"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
