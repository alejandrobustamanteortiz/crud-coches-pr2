import { NgModule } from "@angular/core";
import { PublicRoutingModule } from "./public-routing.module";
import { SharedModule } from "../core/shared/shared.module";

import { HomeComponent } from "./containers/home.component";
import { PublicComponent } from "./public.component";


import { PublicService } from "./public.service";

@NgModule({

    imports: [PublicRoutingModule, SharedModule],
    declarations:[HomeComponent, PublicComponent],
    exports:[HomeComponent, PublicComponent],
    providers:[PublicService]

})

export class PublicModule {

    constructor(){}

}