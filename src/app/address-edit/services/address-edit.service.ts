import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AddressItemModel } from '../../address-overview/models/address-item.model';

@Injectable({ providedIn: 'root' })
export class AddressService {

  public getItems(term: string): Observable<AddressItemModel[]> {
    if (term.length < 3) {
      return of([]);
    }
    return this.http.get<any>('https://photon.komoot.io/api/', {
      params: {
        q: term,
        limit: '40',
        lang: 'de'
      },
    }).pipe(
      filter(this.hasFeatures),
      map(res => {
        console.warn(res);
        return res.features
        .filter(this.hasFullAddress)
        .map(this.featureToAddress);
      })
    );
  }

  public constructor(
    private readonly http: HttpClient
  ) { }

  private hasFeatures = (res: any) => res?.features?.length > 0;

  private hasFullAddress = (i: any): boolean => i.properties.city
    && i.properties.country
    && i.properties.street
    && i.properties.housenumber
    && i.properties.postcode
    && i.properties.state;

  private featureToAddress = (i: any): AddressItemModel => ({
    city: i.properties.city || null,
    country: i.properties.country || null,
    zipCode: i.properties.postcode || null,
    street: i.properties.street || null,
    housenumber: i.properties.housenumber || null,
    state: i.properties.state || null
  })
}
