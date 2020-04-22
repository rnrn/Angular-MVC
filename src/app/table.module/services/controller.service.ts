import { Injectable } from '@angular/core';
import { Observable, of, interval, merge } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { tap, filter } from 'rxjs/operators';
import { TableUpdateAction } from '../actions/table-update.action';

@Injectable()
export class ControllerService {

  constructor(
    private store: Store) { }

  update() {
    console.log('==> send TableUpdateAction');
    this.store.dispatch(new TableUpdateAction());
  }
}