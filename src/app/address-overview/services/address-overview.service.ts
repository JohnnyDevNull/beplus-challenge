import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WindowRefService } from '../../shared/window-ref.service';
import { AddressItemModel } from '../models/address-item.model';

@Injectable({ providedIn: 'root' })
export class AddressOverviewService {
  private addressItems = new BehaviorSubject<AddressItemModel[]>([]);
  public addressItems$ = this.addressItems.asObservable();

  private readonly localStorage = this.windowService.nativeWindow().localStorage;

  public constructor(
    private readonly windowService: WindowRefService
  ) {
    const addressList = this.localStorage.getItem('bpUserAddressList');
    if (addressList != null) {
      this.addressItems.next(JSON.parse(addressList));
    }
  }

  public add(v: AddressItemModel): void {
    const newItems = [...this.addressItems.getValue()];
    newItems.push(v);
    this.addressItems.next(newItems);
    this.localStorage.setItem('bpUserAddressList', JSON.stringify(newItems));
  }
}
