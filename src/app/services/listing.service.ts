import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from './../../environments/environment';

import { RESTresponse } from '../share/restresponse';

import { DetailListing } from '../detail-listing/detail-listing.model';

@Injectable({
  providedIn: 'root',
})
export class ListingService {
  constructor(private http: HttpClient) {}

  getListing(page): Observable<RESTresponse> {
    const url = `${environment.api}`;
    return this.http.get<RESTresponse>(url, {
      params: {
        apiKey: environment.keyApi,
        s: 'avenger',
        page,
      },
    });
  }

  getDetailListing(id: string): Observable<DetailListing> {
    const url = `${environment.api}`;
    return this.http.get<DetailListing>(url, {
      params: {
        apiKey: environment.keyApi,
        i: id,
      },
    });
  }
}
