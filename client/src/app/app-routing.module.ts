import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login.component';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PersonComponent } from './person/person.component';
import { HistoryComponent } from './history/history.component';
import { OfficeComponent } from './office/office.component';
import { OrganizationComponent } from './organization/organization.component';


export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent ,
  children: [
    { path: '', redirectTo: 'people', pathMatch: 'full'  } ,
    { path: 'home', component: HomeComponent },
    { path: 'people',component: PersonComponent  },
    { path: 'org',component: OrganizationComponent },
    { path: 'office',component: OfficeComponent },
    { path: 'activity',component: HistoryComponent }
    // Add more child routes as needed
  ]
},
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }