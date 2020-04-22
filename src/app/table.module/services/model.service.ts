import { Injectable } from '@angular/core';
import { Observable, of, interval, merge } from 'rxjs';
import { Select, Store } from '@ngxs/store';
import { tap, filter } from 'rxjs/operators';
import { TableSelectors } from '../state/table.selectors';

@Injectable()
export class ModelService {

  @Select(TableSelectors.data)
  data$: Observable<any>;
}