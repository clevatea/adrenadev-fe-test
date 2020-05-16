import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ListingService } from '../services/listing.service';

import { DetailListing } from './detail-listing.model';

@Component({
  selector: 'app-detail-listing',
  templateUrl: './detail-listing.component.html',
  styleUrls: ['./detail-listing.component.scss'],
})
export class DetailListingComponent implements OnInit {
  id: string;
  detailListing: DetailListing;
  loadingData = true;
  constructor(private listingService: ListingService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.listingService.getDetailListing(this.id).subscribe((resp: DetailListing) => {
      this.detailListing = resp;
      this.loadingData = false;
    });
  }
}
