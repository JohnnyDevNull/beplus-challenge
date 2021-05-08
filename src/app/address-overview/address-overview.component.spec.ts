import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressOverviewComponent } from './address-overview.component';

describe('AddressOverviewComponent', () => {
  let component: AddressOverviewComponent;
  let fixture: ComponentFixture<AddressOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddressOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
