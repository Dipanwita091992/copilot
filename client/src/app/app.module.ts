// app.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login.component';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HomeHeaderComponent } from './home/home-header/home-header.component';
import { HomeEventsComponent } from './home/home-events/home-events.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // 
import { HomeActivityComponent } from './home/home-activity/home-activity.component';
import { PersonComponent } from './person/person.component';
import { OrganizationComponent } from './organization/organization.component';
import { OfficeComponent } from './office/office.component';
import { HistoryComponent } from './history/history.component';
import { AgGridModule } from 'ag-grid-angular';
import { BrowseComponent } from './shared/browse/browse.component';
import { BrowseToolbarComponent } from './shared/browse-toolbar/browse-toolbar.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptor } from './auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeEventsComponent,
    HomeActivityComponent,
    PersonComponent,
    OrganizationComponent,
    OfficeComponent,
    HistoryComponent,
    BrowseComponent,
    BrowseToolbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule ,
    MatSidenavModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AgGridModule,
    MatAutocompleteModule,
    MatInputModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
