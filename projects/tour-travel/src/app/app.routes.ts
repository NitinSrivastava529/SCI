import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { TourInfoComponent } from './component/tour-info/tour-info.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'tour-info',component:TourInfoComponent},
    {path:'contact',component:ContactComponent},
    {path:'**',component:PageNotFoundComponent}
];
