import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddrLabelInputComponent } from './addr-label-input/addr-label-input.component';
import { AddrTypeaheadInputComponent } from './addr-typeahead-input/addr-typeahead-input.component';
import { AddressEditComponent } from './address-edit.component';
import { AddressService } from './services/address-edit.service';

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
    component.model = {
      label: 'Test Office',
      street: 'Teststreet',
      housenumber: '1',
      state: 'Teststate',
      country: 'Testcountry',
      zipCode: '99999',
      city: 'Test City'
    };
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('app-addr-typeahead-input')).toBeFalsy();
    expect(compiled.querySelector('app-addr-label-input')).toBeTruthy();
  });
});
