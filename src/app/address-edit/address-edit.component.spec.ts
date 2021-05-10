import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddressItemModel } from '../address-overview/models/address-item.model';
import { AddrLabelInputComponent } from './addr-label-input/addr-label-input.component';
import { AddrTypeaheadInputComponent } from './addr-typeahead-input/addr-typeahead-input.component';
import { AddressEditComponent } from './address-edit.component';
import { AddressService } from './services/address-edit.service';

const testAddr: AddressItemModel = {
  label: 'Test Office',
  street: 'Teststreet',
  housenumber: '1',
  state: 'Teststate',
  country: 'Testcountry',
  zipCode: '99999',
  city: 'Test City'
};

describe('AddressEditComponent', () => {
  let component: AddressEditComponent;
  let fixture: ComponentFixture<AddressEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        HttpClientTestingModule
      ],
      declarations: [
        AddressEditComponent,
        AddrLabelInputComponent,
        AddrTypeaheadInputComponent
      ],
      providers: [
        AddressService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display app-addr-typeahead-input', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-addr-typeahead-input')).toBeTruthy();
    expect(compiled.querySelector('app-addr-label-input')).toBeFalsy();
  });

  it('should display app-addr-typeahead-input', () => {
    component.selected = true;
    component.model = {...testAddr};
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-addr-typeahead-input')).toBeFalsy();
    expect(compiled.querySelector('app-addr-label-input')).toBeTruthy();
  });

  it('should switch to address search input', () => {
    component.selected = true;
    component.model = {...testAddr};
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-addr-typeahead-input')).toBeFalsy();
    expect(compiled.querySelector('app-addr-label-input')).toBeTruthy();
    const buttonElement = fixture.debugElement.query(By.css('.bp-change-address'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(compiled.querySelector('app-addr-typeahead-input')).toBeTruthy();
  });
});
