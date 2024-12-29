import { Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AboutComponent } from './component/about/about.component';
import { TourInfoComponent } from './component/tour-info/tour-info.component';
import { ContactComponent } from './component/contact/contact.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { WhyChooseComponent } from './component/why-choose/why-choose.component';
import { VisionComponent } from './component/vision/vision.component';
import { UploadToursComponent } from './component/upload-tours/upload-tours.component';

export const routes: Routes = [
    {path:'',component:HomeComponent,pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'about',component:AboutComponent},
    {path:'tour-info',component:TourInfoComponent},
    {path:'contact',component:ContactComponent},
    {path:'why-choose',component:WhyChooseComponent},
    {path:'vision',component:VisionComponent},
    {path:'upload-tours',component:UploadToursComponent},
    {path:'**',component:PageNotFoundComponent}
];
