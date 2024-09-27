import { Routes } from '@angular/router';
import { HomeComponent } from './application/middle/home/home.component';
import { AppComponent } from './app.component';
import { ServicesComponent } from './application/middle/services/services.component';
import { ContactUsComponent } from './application/middle/contact-us/contact-us.component';
export const routes: Routes = [
   { path:'home', component:HomeComponent},
   { path:'service', component:ServicesComponent},
   { path:'contact', component:ContactUsComponent},
   { path:'**', component:HomeComponent}
];
