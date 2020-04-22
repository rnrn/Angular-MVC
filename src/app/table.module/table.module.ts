import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgxsModule } from '@ngxs/store';
import { TableState } from './state/table.state';
import { ModelService } from './services/model.service';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { GridDataComponent } from './containers/grid-data/grid-data.component';
import { ControllerService } from './services/controller.service';

@NgModule({
  declarations: [
    GridDataComponent,
    GridViewComponent
  ],
  exports: [
    GridDataComponent
  ],
  imports: [
    CommonModule,
    AgGridModule.withComponents([]),
    NgxsModule.forFeature([
      TableState
    ])
  ],
  providers: [
    ModelService,
    ControllerService
  ]
})
export class TableModule { }
