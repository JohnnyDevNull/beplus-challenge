import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AddressItemModel } from '../models/address-item.model';

const testItems: AddressItemModel[] = [
  {
    label: 'Office Nürnberg',
    street: 'Obstmarkt 1',
    zipCode: '90403',
    city: 'Nürnberg',
    state: 'Bayern',
    country: 'Deutschland'
  }
];

@Injectable({ providedIn: 'root' })
export class AddressOverviewService {
  private addressItems = new BehaviorSubject<AddressItemModel[]>([...testItems]);
  public addressItems$ = this.addressItems.asObservable();

  public add(v: AddressItemModel) {
    const newItems = [...this.addressItems.getValue()];
    newItems.push(v);
    this.addressItems.next(newItems);
  }
}
