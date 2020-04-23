import { Action, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TableUpdateAction } from '../actions/table-update.action';

@State<TableStateModel>({
  name: 'tableState',
  defaults: {
    data: undefined
  }
})
@Injectable()
export class TableState {

  constructor(private http: HttpClient) {
  }

  @Action(TableUpdateAction)
  updateAction(ctx: StateContext<TableStateModel>) {
    console.log('==> updateAction begin');
    ctx.setState(patch({ data: [] }));
    return this.http
      .get(
        'https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinnersSmall.json'
      )
      .pipe(map(data => {
        console.log('==> updateAction end');
        ctx.setState(patch({ data }));
      }));
  }
}
