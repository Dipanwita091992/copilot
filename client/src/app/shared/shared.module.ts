import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse/browse.component';
import { BrowseToolbarComponent } from './browse-toolbar/browse-toolbar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';
import { AgGridModule } from 'ag-grid-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateEditModelComponent } from './create-model/create-edit-model.component';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
@NgModule({
  declarations: [BrowseComponent,
    BrowseToolbarComponent,CreateEditModelComponent],
  imports: [
    CommonModule, BrowserModule, FormsModule, ReactiveFormsModule, BrowserAnimationsModule, AgGridModule,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,

  ],
  exports: [BrowseComponent,
    BrowseToolbarComponent,CreateEditModelComponent],
  providers: [CommonServiceService,   {
    provide: STEPPER_GLOBAL_OPTIONS,
    useValue: { displayDefaultIndicatorType: false }
  }]

})
export class SharedModule { }
