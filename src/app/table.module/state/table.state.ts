import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { map } from 'rxjs/operators';
import { TableUpdateAction } from '../actions/table-update.action';
import { DataService } from '../services/data.service';
import { TableFilterAction } from '../actions/table-filter.action';

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
    ctx.setState({ data: [] });
    return this.dataService.get()
      .pipe(map(data => {
        ctx.setState({ data: data });
        console.log('==> updateAction end');
      }));
  }

  @Action(TableFilterAction)
  filterAction(ctx: StateContext<TableStateModel>, action: TableFilterAction) {
    const state = ctx.getState();
    if (action.name) {
      ctx.setState({
        ...state,
        data: state.data.filter(c => c.athlete === action.name)
      });
    }
    else {
      this.dataService.get()
        .pipe(map(data => {
          ctx.setState({ data: data });
          console.log('==> updateAction end');
        })).subscribe(c => console.log('loaded'));
    }    
  }
}
