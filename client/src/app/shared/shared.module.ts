import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse/browse.component';
import { BrowseToolbarComponent } from './browse-toolbar/browse-toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { PeopleModule } from '../people/people.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ BrowseComponent,
    BrowseToolbarComponent],
  imports: [
    CommonModule,BrowserModule,FormsModule,ReactiveFormsModule,BrowserAnimationsModule,AgGridModule,
  ],
  exports: [BrowseComponent,
    BrowseToolbarComponent],
    providers: [CommonServiceService]
})
export class SharedModule { }
