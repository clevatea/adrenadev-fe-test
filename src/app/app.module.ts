import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingComponent } from './listing/listing.component';
import { ListComponent } from './listing/partial/list/list.component';
import { DetailListingComponent } from './detail-listing/detail-listing.component';
import { TruncatePipe } from './truncate.pipe';
import { SpinnerComponent } from './share/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    ListComponent,
    DetailListingComponent,
    TruncatePipe,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    InfiniteScrollModule,
    BsDropdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
