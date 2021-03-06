import { Component, EventEmitter, Output } from '@angular/core';
import { AddressItemModel } from '../address-overview/models/address-item.model';

@Component({
  selector: 'app-address-edit',
  templateUrl: './address-edit.component.html',
  styleUrls: ['./address-edit.component.scss']
})
export class AddressEditComponent {

  public selected = false;
  public model: AddressItemModel | null = null;

  @Output()
  public cancelEvent = new EventEmitter<void>();

  @Output()
  public saveEvent = new EventEmitter<AddressItemModel | null>();

  public onEditModel(): void {
    this.model = null;
    this.selected = false;
  }

  public onCancel(): void {
    this.cancelEvent.emit();
  }

  public onSave(): void {
    if (!this.selected) { return; }
    if (!this.model?.label) { return; }

    this.saveEvent.next(this.model != null
      ? {...this.model}
      : null
    );

    setTimeout(() => {
      this.model = null;
      this.selected = false;
    });
  }

  public onItemSelect(): void {
    this.selected = true;
  }
}
