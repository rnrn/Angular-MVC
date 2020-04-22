import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { TableModule } from './table.module/table.module';
import { NgxsModule } from '@ngxs/store';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpClientModule,
      AgGridModule.withComponents([]),
      NgxsModule.forRoot([], {
        developmentMode: true
      }),
      TableModule
    ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
