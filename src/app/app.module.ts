import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddressEditComponent } from './address-edit/address-edit.component';
import { AddressItemComponent } from './address-item/address-item.component';
import { AddressOverviewComponent } from './address-overview/address-overview.component';
import { AppComponent } from './app.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    AddressOverviewComponent,
    AddressEditComponent,
    AddressItemComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
