import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete/autocomplete';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { AddressItemModel } from '../../address-overview/models/address-item.model';
import { AddressService } from '../services/address-edit.service';

@Component({
  selector: 'app-addr-typeahead-input',
  templateUrl: './addr-typeahead-input.component.html',
  styleUrls: ['./addr-typeahead-input.component.scss']
})
export class AddrTypeaheadInputComponent {

  private _model: AddressItemModel | null = null;

  public get model(): AddressItemModel | null {
    return this._model;
  }

  @Input()
  public set model(model: AddressItemModel | null) {
    this._model = model;
    this.modelChange.next(this._model);
  }

  @Output()
  public modelChange = new EventEmitter<AddressItemModel | null>();

  @Output()
  public selectEvent = new EventEmitter<MatAutocompleteSelectedEvent>();

  private readonly loadAddressList$ = new Subject<KeyboardEvent>();

  public addressList$: Observable<AddressItemModel[]> = this.loadAddressList$.pipe(
    debounceTime(300),
    switchMap((e: any) => this.getItemsObs(e))
  );

  public constructor(
    private readonly addrService: AddressService
  ) { }

  public formatter = (item: AddressItemModel): string => {
    return item != null ? `${item.street}, ${item.zipCode} ${item.city}` : '';
  }

  public onItemSelect(event: MatAutocompleteSelectedEvent): void {
    this.selectEvent.next(event);
  }

  public filterAddressList(event: KeyboardEvent): void {
    this.loadAddressList$.next(event);
  }

  public getItemsObs(e: any): Observable<AddressItemModel[]> {
    if (e?.target?.value?.length > 2) {
      return this.addrService.getItems(e?.target?.value);
    } else {
      return of([]);
    }
  }
}
