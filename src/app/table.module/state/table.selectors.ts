import { Selector } from '@ngxs/store';
import { TableState } from './table.state';

export class TableSelectors {

  @Selector([TableState])
  static data(state: TableStateModel) {
    console.log('==> TableSelectors');
    return state.data;
  }
}
