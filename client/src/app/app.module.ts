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
import { OfficeComponent } from './office/office.component';
import { HistoryComponent } from './history/history.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { AuthInterceptor } from './auth-interceptor.service';
import { PeopleModule } from './people/people.module';
import { SharedModule } from './shared/shared.module';
import { OrganizationModule } from './organization/organization.module';
import { OfficeModule } from './office/office.module';
import { ActivityModule } from './activity/activity.module';
import { MatDialogModule } from '@angular/material/dialog'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    HomeComponent,
    HomeHeaderComponent,
    HomeEventsComponent,
    HomeActivityComponent,
    HistoryComponent,
    
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
    MatAutocompleteModule,
    MatInputModule,
    PeopleModule,
    SharedModule,
    OrganizationModule,
    OfficeModule,
    ActivityModule
  ],
  providers: [  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
