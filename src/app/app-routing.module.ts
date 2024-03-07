import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeHomeComponent } from './pe-home/pe-home.component';
import { PeEditclassComponent } from './pe-editclass/pe-editclass.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
    {
        path: "",
        component: PeHomeComponent,
        title: "Home"
    },
    {
        path: "users",
        component: UsersComponent,
        title: "Users"
    },
    {
        path: "class/new",
        component: PeEditclassComponent,
        title: "Edit Class"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
