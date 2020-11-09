import { Component, OnInit } from '@angular/core';
import { ModelService } from '../../services/model.service';
import { ControllerService } from '../../services/controller.service';
import { CompleterService, CompleterData, CompleterItem } from 'ng2-completer';

@Component({
  selector: 'pr-filter-athlete',
  templateUrl: './filter-athlete.component.html',
  styleUrls: ['./filter-athlete.component.scss']
})
export class FilterAthleteComponent implements OnInit {

  constructor(public modelService: ModelService,
    private controllerService: ControllerService,
    private completerService: CompleterService) {
    this.dataService = completerService.local(modelService.data$, 'athlete', 'athlete');
  }

  dataService: CompleterData;

  ngOnInit(): void {
  }

  onSelected(selected: CompleterItem) {
    this.controllerService.filter(selected?.originalObject?.athlete);
  }
}
