import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddrTypeaheadInputComponent } from './addr-typeahead-input.component';

describe('AddrTypeaheadInputComponent', () => {
  let component: AddrTypeaheadInputComponent;
  let fixture: ComponentFixture<AddrTypeaheadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatAutocompleteModule,
        MatInputModule,
        MatFormFieldModule,
        HttpClientTestingModule
      ],
      declarations: [ AddrTypeaheadInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddrTypeaheadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
