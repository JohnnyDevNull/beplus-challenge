import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, OperatorFunction } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { AddressItemModel } from '../address-overview/models/address-item.model';
import { AddressService } from './services/address-edit.service';

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

  public set addrLabel(v: string) {
    if (this.model) {
      this.model.label = v;
    }
  }

  public get addrLabel(): string {
    return this.model?.label || '';
  }

  public constructor(
    private readonly addrService: AddressService
  ) { }

  search: OperatorFunction<string, readonly AddressItemModel[]> =
    (text$: Observable<string>) => text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length > 2 ? this.filterAddressList(term) : [])
    )

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
  }

  private filterAddressList(term: string): AddressItemModel[] {
    return this.addrService.items.filter(v => Object
      .values(v)
      .join('')
      .toLowerCase()
      .indexOf(term.toLowerCase()) > -1
    ).slice(0, 3);
  }

  public formatter = (item: AddressItemModel): string => {
    return `${item.street}, ${item.zipCode} ${item.city}`;
  }

  public onItemSelect(): void {
    this.selected = true;
  }
}
