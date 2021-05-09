import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AddressItemModel } from './models/address-item.model';
import { AddressOverviewService } from './services/address-overview.service';

@Component({
  selector: 'app-address-overview',
  templateUrl: './address-overview.component.html',
  styleUrls: ['./address-overview.component.scss']
})
export class AddressOverviewComponent {

  public editVisible = false;

  public get items$(): Observable<AddressItemModel[]> {
    return this.itemsService.addressItems$;
  }

  public constructor(
    private readonly itemsService: AddressOverviewService
  ) { }

  public onCancelEdit(): void {
    this.editVisible = false;
  }

  public onSaveEdit(item: AddressItemModel | null): void {
    if (item != null) {
      this.itemsService.add(item);
      this.editVisible = false;
    }
  }
}
