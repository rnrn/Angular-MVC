import { Action, State, StateContext, Store } from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { switchMap, map, finalize, tap } from 'rxjs/operators';
import { patch } from '@ngxs/store/operators';
import { TableUpdateAction } from '../actions/table-update.action';
import { Log } from '@angular/core/testing/src/logger';

@State<TableStateModel>({
  name: 'tableState',
  defaults: {
    data: undefined
  }
})
export class TableState {

  constructor(
    private store: Store,
    private http: HttpClient) {}

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
