import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutSciComponent } from './component/about-sci/about-sci.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { ServicesComponent } from './component/services/services.component';
import { ProductComponent } from './component/product/product.component';
import { OurClientComponent } from './component/our-client/our-client.component';
import { TourTravelsComponent } from './component/tour-travels/tour-travels.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutSciComponent},
    {path:'services',component:ServicesComponent},
    {path:'product',component:ProductComponent},
    {path:'our-clients',component:OurClientComponent},
    {path:'contact-us',component:ContactUsComponent},
    {path:'tour-travels',component:TourTravelsComponent},
    {path:'**',component:PageNotFoundComponent}
];
