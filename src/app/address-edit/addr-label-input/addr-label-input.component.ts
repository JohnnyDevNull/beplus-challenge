import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AddressItemModel } from '../../address-overview/models/address-item.model';

@Component({
  selector: 'app-addr-label-input',
  templateUrl: './addr-label-input.component.html'
})
export class AddrLabelInputComponent {

  @Input()
  public model: AddressItemModel | null = null;

  @Output()
  public editEvent = new EventEmitter<void>();

  public onEditModel(): void {
    this.editEvent.next();
  }

  public set addrLabel(v: string | null) {
    if (this.model) {
      this.model.label = v;
    }
  }

  public get addrLabel(): string | null {
    return this.model?.label || '';
  }
}
