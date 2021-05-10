import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddrLabelInputComponent } from './address-edit/addr-label-input/addr-label-input.component';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';
import { AddrTypeaheadInputComponent } from './address-edit/addr-typeahead-input/addr-typeahead-input.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressOverviewComponent,
    AddressEditComponent,
    AddressItemComponent,
    ModalComponent,
    AddrLabelInputComponent,
    AddrTypeaheadInputComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
