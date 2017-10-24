import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule,Http, Response } from '@angular/http';

import { AppComponent } from './app.component';
import { DataService } from './service/data.service';
import { OrderByPipe } from './pipe/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    OrderByPipe
  ],
  imports: [
    HttpModule, BrowserModule
  ],
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
