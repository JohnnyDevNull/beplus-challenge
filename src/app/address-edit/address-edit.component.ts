import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  public model: AddressItemModel | null = null;

  @Output()
  public cancelEvent = new EventEmitter<void>();

  @Output()
  public saveEvent = new EventEmitter<AddressItemModel | null>();

  public constructor(
    private readonly addrService: AddressService
  ) { }

  search: OperatorFunction<string, readonly string[]> =
    (text$: Observable<string>) => text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.addrService.items.filter(
            v => v.toLowerCase().indexOf(term.toLowerCase()) > -1
          ).slice(0, 10))
    )

  public onEditModel(): void {
    this.model = null;
  }

  public onCancel(): void {
    this.cancelEvent.emit();
  }

  public onSave(): void {
    this.saveEvent.next(this.model != null
      ? {...this.model}
      : null
    );
  }
}
