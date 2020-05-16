import { Component, OnInit, Input } from '@angular/core';

import { Listing } from '../../listing.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() list: Listing;

  constructor() {}

  ngOnInit(): void {}
}
