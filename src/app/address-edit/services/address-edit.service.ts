import { Injectable } from '@angular/core';
import { AddressItemModel } from '../../address-overview/models/address-item.model';

const addressList: AddressItemModel[] = [
  { street: 'Limbacher Straße 12',  zipCode: '91126', city: 'Schwabach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Limbacher Straße 12a', zipCode: '91126', city: 'Schwabach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Limbacher Straße 12b', zipCode: '91126', city: 'Schwabach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Limbacher Straße 12c', zipCode: '91126', city: 'Schwabach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 1', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 2', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 3', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 4', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 1', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 2', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 3', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 4', zipCode: '91522', city: 'Ansbach', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 1', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 2', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 3', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofsplatz 4', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 1', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 2', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 3', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
  { street: 'Bahnhofstraße 4', zipCode: '90443', city: 'Nürnberg', country: 'Deutschland', state: 'Bayern' },
];

@Injectable({ providedIn: 'root' })
export class AddressService {
  public readonly items: AddressItemModel[] = [...addressList];
}
