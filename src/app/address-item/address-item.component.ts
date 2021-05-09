import { Component, Input } from '@angular/core';
import { AddressItemModel } from '../address-overview/models/address-item.model';

@Component({
  selector: 'app-address-item',
  templateUrl: './address-item.component.html',
  styleUrls: ['./address-item.component.scss']
})
export class AddressItemComponent {
  @Input()
  public item: AddressItemModel | null = null;
  @Input()
  public showLabel = true;
}
