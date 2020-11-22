import { Injectable } from '@angular/core';
import { TableUpdateAction } from '../actions/table-update.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable()
export class ControllerService {

  constructor() { }

  @Dispatch() 
  update() {
    console.log('==> send TableUpdateAction');
    return new TableUpdateAction()  }
}
