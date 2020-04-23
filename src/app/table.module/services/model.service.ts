import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Select } from '@ngxs/store';
import { TableSelectors } from '../state/table.selectors';

@Injectable()
export class ModelService {

  @Select(TableSelectors.data)
  data$: Observable<any>;
}
