import { Component, EventEmitter, Output } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
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

  private readonly loadAddressList$ = new Subject<KeyboardEvent>();
  public addressList$: Observable<AddressItemModel[]> = this.loadAddressList$.pipe(
    debounceTime(300),
    switchMap((e: any) => {
      if (e?.target?.value?.length > 2) {
        return this.addrService.getItems(e?.target?.value);
      } else {
        return of([]);
      }
    })
  );

  public constructor(
    private readonly addrService: AddressService
  ) { }

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

  public formatter = (item: AddressItemModel): string => {
    return item != null ? `${item.street}, ${item.zipCode} ${item.city}` : '';
  }

  public onItemSelect(): void {
    this.selected = true;
  }

  public filterAddressList(event: KeyboardEvent): void {
    this.loadAddressList$.next(event);
  }
}
