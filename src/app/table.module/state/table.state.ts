import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { patch } from '@ngxs/store/operators';
import { map } from 'rxjs/operators';
import { TableUpdateAction } from '../actions/table-update.action';
import { DataService } from '../services/data.service';

@State<TableStateModel>({
  name: 'tableState',
  defaults: {
    data: undefined
  }
})
@Injectable()
export class TableState {

  constructor(private dataService: DataService) {
  }

  @Action(TableUpdateAction)
  updateAction(ctx: StateContext<TableStateModel>) {
    console.log('==> updateAction begin');
    ctx.setState(patch({ data: [] }));
    return this.dataService.get()
      .pipe(map(data => {
        ctx.setState(patch({ data }));
        console.log('==> updateAction end');
      }));
  }
}
