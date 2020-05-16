import { Component, OnInit } from '@angular/core';

import { ListingService } from '../services/listing.service';

import { Listing } from './listing.model';
import { RESTresponse } from './../share/restresponse';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
})
export class ListingComponent implements OnInit {
  listing: Listing[] = [];

  totalResult: number;
  page = 0;

  loadingData = false;

  constructor(private listingService: ListingService) {}

  ngOnInit(): void {
    this.onLoad(1);
  }

  onScrollDown() {
    if (Math.ceil(this.totalResult / 10) >= this.page) {
      this.onLoad(this.page);
    }
  }

  onLoad(page) {
    this.loadingData = true;
    this.listingService.getListing(page).subscribe((resp: RESTresponse) => {
      const dataSearch: Listing[] = resp.Search;
      this.totalResult = +resp.totalResults;
      this.listing.push(...dataSearch);
      this.page = page + 1;
      this.loadingData = false;
    });
  }
}
