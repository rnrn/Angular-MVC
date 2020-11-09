import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgxsModule } from '@ngxs/store';

import { TableState } from './state/table.state';
import { ModelService } from './services/model.service';
import { ControllerService } from './services/controller.service';
import { DataService } from './services/data.service';

import { GridDataComponent } from './containers/grid-data/grid-data.component';
import { GridViewComponent } from './components/grid-view/grid-view.component';
import { FilterAthleteComponent } from './components/filter-athlete/filter-athlete.component';
import { Ng2CompleterModule } from "ng2-completer";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    GridDataComponent,
    GridViewComponent,
    FilterAthleteComponent
  ],
  exports: [
    GridDataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    Ng2CompleterModule,
    AgGridModule.withComponents([]),
    NgxsModule.forFeature([
      TableState
    ])
  ],
  providers: [
    ModelService,
    ControllerService,
    DataService
  ]
})
export class TableModule { }
