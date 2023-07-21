import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PublicComponent } from "./public.component";
import { HomeComponent } from "./containers/home.component";
import { FormularioComponent } from "../core/shared/components/formulario/formulario.component";

const routes : Routes = [
    {path:'', component: PublicComponent, children: 
    [
            {path:'', redirectTo: 'home', pathMatch: 'full'},
            {path: 'home', component: HomeComponent},
            {path: 'nuevo-coche', component: FormularioComponent}
        ]
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class PublicRoutingModule{}