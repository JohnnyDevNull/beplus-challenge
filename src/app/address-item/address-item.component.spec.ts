import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddressItemModel } from '../address-overview/models/address-item.model';
import { AddressItemComponent } from './address-item.component';

const testItem: AddressItemModel = {
  label: 'Testlabel',
  street: 'Teststrasse',
  housenumber: '5',
  zipCode: '99999',
  city: 'Teststadt',
  state: 'Teststate',
  country: 'Testland'
};

describe('AddressItemComponent', () => {
  let component: AddressItemComponent;
  let fixture: ComponentFixture<AddressItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddressItemComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddressItemComponent);
    component = fixture.componentInstance;
    component.item = testItem;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have showLabel initially true`, () => {
    expect(component.showLabel).toEqual(true);
  });

  it(`should have showBorder initially true`, () => {
    expect(component.showBorder).toEqual(true);
  });

  it('should render label', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.addr-item .addr-label').textContent).toContain('Test');
  });

  it('must not render label', () => {
    component.showLabel = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.addr-item .addr-label')).toBeFalsy();
  });

  it('should have border class', () => {
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.addr-item.item-border')).toBeTruthy();
  });

  it('must not have border class', () => {
    component.showBorder = false;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.addr-item.item-border')).toBeFalsy();
  });
});
