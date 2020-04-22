import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModelService } from '../../services/model.service';
import { ControllerService } from '../../services/controller.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'pr-grid-data',
  templateUrl: './grid-data.component.html',
  styleUrls: []
})
export class GridDataComponent {

  data$: Observable<any>;

  constructor(
    public modelService: ModelService,
    private controllerService: ControllerService ) {
    
    this.data$ = this.modelService.data$;

  }

  onUpdate() {
    this.controllerService.update();
  }
}