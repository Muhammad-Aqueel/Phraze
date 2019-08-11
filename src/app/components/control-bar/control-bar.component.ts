import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { SetShowSearchAction } from '../../store/nav.actions';
import { distanceToEndpointSelector } from '../../store/nav.selectors';

@Component({
  selector: 'app-control-bar',
  templateUrl: './control-bar.component.html',
  styleUrls: ['./control-bar.component.scss']
})
export class ControlBarComponent implements OnInit {

  distanceToEndpoint$;

  constructor(private store: Store<any>) {
    this.distanceToEndpoint$ = this.store.pipe(select(distanceToEndpointSelector));
  }

  ngOnInit() {

  }

  openSearchPage() {
    this.store.dispatch(new SetShowSearchAction({isShowSearch: true}));
  }
}
