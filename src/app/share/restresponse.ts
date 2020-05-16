import { Listing } from '../listing/listing.model';

export interface RESTresponse {
  Response: string;
  Search: Listing[];
  totalResults: number;
}
