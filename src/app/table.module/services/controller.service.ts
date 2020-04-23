import { Injectable } from '@angular/core';
import { Store } from '@ngxs/store';
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
