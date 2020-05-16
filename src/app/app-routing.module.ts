import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListingComponent } from './listing/listing.component';
import { DetailListingComponent } from './detail-listing/detail-listing.component';

const routes: Routes = [
  {
    path: '',
    component: ListingComponent,
  },
  {
    path: 'detail/:id',
    component: DetailListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
